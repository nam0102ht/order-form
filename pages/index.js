import Head from 'next/head'
import Navigation from '../components/header/nav/Navigation'
export default function Home() {

  return (
    <div>
      <Navigation
        height='9em'
        backgroundColor='#000'
        iconPosition='center'
      />
      <div className="container">
        <Head>
          <title>TING TING SHOP</title>
        </Head>

        <main>
          <div>
            <div className="hero">
              <div className="container">
                <div className="searchbox">
                  <h3 className="slogun">Tasty food delivered to you in minutes</h3>
                  <div className="inputwrapper">

                    <div className="searchwrapper">
                      <input type="text" className="search" />
                    </div>
                    <div className="orderwrapper">
                      <button className="order">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-b">
              <div className="container">
                {/* start */}
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" alt="" />

                    <h3>Chorizo</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-chicken-cf6f9e2.jpg?webp=true&quality=90&resize=440%2C400" alt="" />
                    <h3>Easy butter chicken</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg?quality=90&webp=true&resize=300,272" alt="" />
                    <h3>Easy classic lasagne</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                {/* end line food */}
              </div>
            </div>
            <div className="section-b">
              <div className="container">
                {/* start */}
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?webp=true&quality=90&resize=440%2C400" alt="" />

                    <h3>Easy pancakes</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-fajitas-2-d7172f8.jpg?webp=true&quality=90&resize=440%2C400" alt="" />
                    <h3>Easy chicken fajitas</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                <div className="card">
                  <div className="cardwrapper">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg?webp=true&quality=90&resize=440%2C400" alt="" />
                    <h3>Easy carrot cake</h3>
                    <button className="btn btn-transparent">Read More</button>
                  </div>
                </div>
                {/* end line food */}
              </div>
            </div>
            <div className="section-c">
              <div className="left" />
              <div className="right">
                <div className="content">
                  <h2>FAASOS ELITE</h2>
                  <p>
                    Faasos Elite is our loyalty programme to express our gratitude to
                    delight our power customers with prioritized delivery, facility to
                    pay once in 15 days, surprise complimentary freebies and more.
        </p>
                  <div className="more">
                    Find More <i className="fas fa-chevron-right" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>




      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xin chao
          </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 1100px;
          margin: auto;
        }

        @media screen and (max-width: 780px) {
          .container {
            max-width: 470px;
          }
        }
        main {
          padding: 10rem 0 0 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
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
        :root {
          --primary-color: #3a1077;
          --secondary-color: #4a2292;
          --header: #ffde02;
          --header-light: #ffe536;
          --button-primary: #7400ff;
          --footer: #f0e8fb;
        }
        
        * {
          margin: 0;
          padding: 0;
          list-style: none;
          text-decoration: none;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
        }
        
        body {
          font-family: "Ubuntu", sans-serif;
        }
        
        .container {
          max-width: 1100px;
          margin: auto;
        }
        
        @media screen and (max-width: 780px) {
          .container {
            max-width: 470px;
          }
        }
        
        .btn {
          height: 1.2rem;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          font-weight: 100;
          font-size: 0.9rem;
          cursor: pointer;
          font-family: "Roboto", sans-serif;
        }
        
        .btn-darken {
          background: var(--button-primary);
          color: #fff;
        }
        
        .btn-darken:hover {
          background: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        
        .btn-light {
          background: var(--header);
          color: var(--primary-color);
          border: 0;
        }
        
        .btn-light:hover {
          background: transparent;
          color: #fff;
          border: 1px solid #fff;
        }
        
        .btn-transparent {
          background: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        
        .btn-transparent:hover {
          background: var(--primary-color);
          color: #fff;
        }
        
        .overlay {
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.7);
        }
        
        .navigation {
          background: var(--header);
          height: 4.5rem;
        }
        
        .navigation .container {
          height: 100%;
        }
        
        .navigation .container .navwrapper {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          height: 100%;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
        }
        
        .navigation .container .navwrapper .logo {
          color: var(--primary-color);
          font-family: "Blinker", sans-serif;
          font-size: 2rem;
        }
        
        .navigation .container .navwrapper .menu {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
              -ms-flex-direction: row;
                  flex-direction: row;
        }
        
        .navigation .container .navwrapper .menu li {
          margin-right: 1rem;
        }
        
        .hero {
          background: url("https://mk0madklubben208sy3o.kinstacdn.com/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
          width: 100%;
        }
        
        @media screen and (max-width: 780px) {
          .hero {
            height: 250px;
          }
        }
        
        .hero .container {
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
        }
        
        .hero .container .searchbox {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 5px;
          width: 80%;
          height: 50%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox {
            width: 100%;
            height: 60%;
            padding: 90px 0;
          }
        }
        
        .hero .container .searchbox .slogun {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: #ffffff;
          font-weight: 100;
          font-family: sans-serif;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .slogun {
            display: none;
          }
        }
        
        .hero .container .searchbox .inputwrapper {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
              -ms-flex-direction: row;
                  flex-direction: row;
          height: 3rem;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .inputwrapper {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            margin-top: -90px;
          }
        }
        
        .hero .container .searchbox .inputwrapper .citywrapper {
          border-radius: 5px 0px 0px 5px;
          border-right: 0;
          background: #fff;
          width: 13rem;
          height: 3rem;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .inputwrapper .citywrapper {
            border-radius: 0;
            width: 100%;
          }
        }
        
        .hero .container .searchbox .inputwrapper .citywrapper select.city {
          text-indent: 15px;
          font-size: 0.9rem;
          padding: 3rem;
          height: 100%;
          width: 99%;
          border: 0px;
          background: #fff;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .inputwrapper .citywrapper select.city {
            height: 3rem;
            font-size: 0.9rem;
          }
        }
        
        .hero .container .searchbox .inputwrapper .searchwrapper {
          height: 100%;
          width: 25rem;
        }
        
        .hero .container .searchbox .inputwrapper .searchwrapper .search {
          font-size: 1rem;
          font-weight: 100;
          padding-left: 10px;
          height: 3rem;
          width: 100%;
          border: 0;
          background: #ebeaea;
        }
        
        .hero .container .searchbox .inputwrapper .orderwrapper {
          height: 3rem;
          width: 10rem;
          background: var(--header);
          border-radius: 0 5px 5px 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          cursor: pointer;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .inputwrapper .orderwrapper {
            width: 100%;
            height: 29rem;
            border-radius: 0;
          }
        }
        
        .hero .container .searchbox .inputwrapper .orderwrapper button.order {
          text-align: center;
          background: transparent;
          border: 0;
          color: var(--primary-color);
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
        }
        
        @media screen and (max-width: 780px) {
          .hero .container .searchbox .inputwrapper .orderwrapper button.order {
            height: 2.5rem;
            width: 100%;
          }
        }
        
        .section-b {
          width: 100%;
          height: 550px;
        }
        
        @media screen and (max-width: 780px) {
          .section-b {
            height: 2050px;
          }
        }
        
        .section-b .container {
          display: -ms-grid;
          display: grid;
          grid-row-gap: 1px;
          grid-column-gap: 9px;
          -ms-grid-columns: (1fr)[3];
              grid-template-columns: repeat(3, 1fr);
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          height: 100%;
        }
        
        @media screen and (max-width: 780px) {
          .section-b .container {
            -ms-grid-columns: 1fr;
                grid-template-columns: 1fr;
            -ms-grid-rows: (1fr)[3];
                grid-template-rows: repeat(3, 1fr);
            width: 90%;
          }
        }
        
        .section-b .container .card {
          width: 20rem;
          height: 30rem;
          border: 1px solid #f2f1f1;
          -webkit-box-shadow: 5px 5px 8px #888888;
                  box-shadow: 5px 5px 8px #888888;
          background: #fff;
          border-radius: 3px;
        }
        
        @media screen and (max-width: 780px) {
          .section-b .container .card {
            width: 100%;
            height: 40rem;
          }
        }
        
        .section-b .container .card .cardwrapper {
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
        }
        
        .section-b .container .card .cardwrapper img {
          width: 95%;
          height: 75%;
          object-fit: cover;
        }
        
        @media screen and (max-width: 780px) {
          .section-b .container .card .cardwrapper img {
            height: 80%;
          }
        }
        
        .section-b .container .card .cardwrapper h3 {
          font-size: 1rem;
          margin-top: 10px;
          color: var(--primary-color);
          text-transform: uppercase;
        }
        
        .section-b .container .card .cardwrapper button {
          margin-top: 20px;
          height: 2.5rem;
          width: 7.5rem;
        }
        
        .section-c {
          width: 100%;
          height: 500px;
          display: -ms-grid;
          display: grid;
          -ms-grid-columns: (1fr)[2];
              grid-template-columns: repeat(2, 1fr);
        }
        
        @media screen and (max-width: 780px) {
          .section-c {
            height: 600px;
            -ms-grid-columns: 1fr;
                grid-template-columns: 1fr;
            -ms-grid-rows: (1fr)[2];
                grid-template-rows: repeat(2, 1fr);
          }
        }
        
        .section-c .left {
          width: 100%;
          height: 100%;
          background: url("https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636") center no-repeat;
        }
        
        .section-c .right {
          background: #fafafa;
        }
        
        .section-c .right .content {
          margin-top: 20%;
          margin-left: 10%;
          width: 80%;
        }
        
        @media screen and (max-width: 780px) {
          .section-c .right .content {
            margin-top: 10%;
          }
        }
        
        .section-c .right .content h2 {
          text-transform: uppercase;
          font-size: 1.3rem;
          font-weight: lighter;
        }
        
        .section-c .right .content p {
          font-size: 0.9rem;
          margin-top: 20px;
          line-height: 20px;
        }
        
        .section-c .right .content .more {
          margin-top: 20px;
          color: var(--primary-color);
          cursor: pointer;
        }
        
        .section-c .right .content .more i {
          font-size: 0.7rem;
          margin-left: 5px;
        }
      
        
      `}</style>
    </div >
  )
}
