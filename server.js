const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require("express")
const Cookies = require("cookies")
const { default: Axios } = require('axios')
const bodyParser = require("body-parser")
const { stringify } = require('querystring')
const { userInfo } = require('os')

const port = 3000
const API_AUTH = "http://localhost:5000/api/v2/auth"
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getUser = async (req, res) => {
  let user = req.body
  return await Axios({
    url: API_AUTH,
    data: JSON.stringify(user),
    method: 'post',
    headers: { 
      'Content-Type': 'application/json'
    },
  })
}

const setCookies = async (token, req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  cookies.set("token", token, {
    httpOnly: true,
    expires: new Date("2039-12-01"),
    path: "/"
  })
}

const getCookies = (req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  return cookies.get("token")
}

const setCookiesUser = async (user, req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  cookies.set("user", JSON.stringify(user), {
    httpOnly: true,
    expires: new Date(new Date().getTime() + 86400000),
    path: "/"
  })
}

const lougOutCookies = async (user, req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  cookies.set("user", JSON.stringify(user), {
    httpOnly: true,
    expires: new Date(),
    path: "/"
  })
}

const getCookiesUser = (req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  return cookies.get("user")
}

const logoutToken = (req, res) => {
  let cookies = new Cookies(req, res, {
    keys: ['36e373341d2d673d7d250ae215a6a6548dc7762e']
  })
  cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(),
    path: "/"
  })
  cookies.set("token.sig", "", {
    httpOnly: true,
    expires: new Date(),
    path: "/"
  })
}

app.prepare().then(() => {
  const server = express()

  // Parse application/json
  server.use(bodyParser.json())

//Tạo ra các router. Dòng này có ý nghĩa khi gửi request đến path /a . Sẽ render file /a.js trong thư mục pages/a.js của Nextjs

  server.post("/api/login", async (req, res) => {
    console.log(req.body)
    if(req.body === null) {
        res.send({
        status: -1,
        message: "Body is null",
        data: {}
      })
      return
    }
    let result = await getUser(req, res)
    console.log(result.data)
    if(result.data.status === 200) {
      await setCookies(result.data.data.token, req, res)
      res.send(result.data)
      return
    }
    res.send(result.data)
  })


  server.get("/api/me", async (req, res) => {
    let result = getCookies(req, res)
    let userCookies = getCookiesUser(req, res)
    if(!userCookies && result) {
      let user = await Axios({
        url: "http://localhost:5000/api/v2/auth",
        method: 'get',
        headers: { Authorization: `Bearer ${result}` }
      })
      if(user.data.status === 200) {
        await setCookiesUser(user.data.data, req, res)
      }
      res.send({
        status: 200,
        message: "Success",
        data: user.data.data
      })
      return
    } 
    else if (!userCookies && !result) {
      res.send({
        status: 200,
        message: "Success",
        data: {}
      })
      return
    }
    else {
      res.send({
        status: 200,
        message: "Success",
        user: JSON.parse(userCookies)
      })
      return 
    }
  })

  server.get("/api/logout", async (req, res) => {
    let token = getCookies(req, res)
    let userCookies = getCookiesUser(req, res)
    if(!userCookies && !token) {
      res.send({
        status: -1,
        message: "User not login",
        user: JSON.parse(userCookies)
      })
    } else {
      logoutToken(req, res)
      lougOutCookies({}, req, res)
      res.send({
        status: 200,
        message: "Success",
        user: JSON.parse(userCookies)
      })
    }
  })

// Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
// https://nextjs.org/docs/routing/introduction
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})