import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout.js'
import Link from 'next/link'

import Head from 'next/head'

export default () => {
  const router = useRouter()
  return (
    <Layout>

      <div className="contanier">


<Head>
        <title>This is Page One</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          />
      </Head>

 <h1>This is Page one</h1>
      <div className="markdown">
    <p className="markdown">

          Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new
           chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table
            to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
             back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi 
          suggests impeachment back on the table to address 'grave new chapter of lawlessness'
    </p>
          
      </div>
      <div className="link_container">
 
      <a href="https://www.google.com/">Google</a>
   

    
      <a href="https://www.yahoo.com/">Yahoo</a>
   

      
      <a href="https://www.amazon.com/">Amazon</a>
     
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }
        .contanier{
          display:flex;
          flex-direction:column;
          max-width:90%;
          justify-content:center;
          margin-left:2%;
        }
        .markdown a {
          text-decoration: none;
          color: blue;
        }
        
        .markdown a:hover {
          opacity: 0.6;
        }
        
        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
        .link_container{
          display:flex;
          flex-direction:column;
          min-height:100px;
          justify-content:space-between;
          margin-top:50px;
        }
        `}</style>
    
        </div>
        </Layout>
  )
}
