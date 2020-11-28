const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require("express")
const Cookies = require("cookies")
const { default: Axios } = require('axios')
const bodyParser = require("body-parser")

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