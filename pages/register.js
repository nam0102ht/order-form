import Axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import RegisterPage from '../components/body/RegisterPage'
import Navigation from '../components/header/nav/Navigation'

export default function Login() {
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)

  useEffect(async () => {
    const data = await Axios.get('/api/me')
    if(data.data.user) {
        setUser(data.data.user)
        setShow(true)
        return 
    }
    setUser({})
    setShow(false)
  }, [setUser, setShow])
  return (
    <div>
      <Navigation 
        height='9em'
        backgroundColor='black'
        iconPosition='center'
        user={user}
        show={show}
      />
      <div className="container">
        <Head>
          <title>TING TING SHOP</title>
        </Head>

        <main>
          <div className="grid">
            <RegisterPage />
          </div>
        </main>

        <footer>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 10rem 0 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          width: 100%;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
