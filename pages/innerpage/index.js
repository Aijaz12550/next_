import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout.js'
import Link from 'next/link'
import Head from 'next/head'

export default () => {
  const router = useRouter()
  return (
    <Layout>
<Head>
        <title>This is Page Two</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <div className="contanier">
 <h1>This is Page Two</h1>
      <div className="markdown">
    <p className="markdown">

    This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2This is page2

    </p>
          
      </div>
      <div className="link_container">
 
      <a href="https://www.facebook.com/">Facebook</a>
   

    
      <a href="https://www.instagram.com/">Instagram</a>
   

      
      <a href="https://www.twitter.com/">Twitter</a>
     
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
            margin-top:16px;
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
