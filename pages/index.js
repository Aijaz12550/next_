import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import FirstPage from './index/index'



export default function Blog() {
  return (
    <div>

       <FirstPage/>
      
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
        
        ul {
          padding: 0;
        }
        
        li {
          list-style: none;
          margin: 5px 0;
        }
        
        a {
          text-decoration: none;
          color: blue;
        }
        
        a:hover {
          opacity: 0.6;
        }
      `}</style>
   
  </div>
  )
}
