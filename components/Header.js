import Link from 'next/link'


export default function Header() {
  return (
    <div className="container" >
      <Link href="/index">
        <a className="h1">First Page</a>
      </Link>

      <Link href="/innerpage">
        <a className="h1">Second Page</a>
      </Link>
     

      <style jsx>
        {`
        .container{
           background:#ef5359;
           width:100%;
           min-height:60px;
           margin:0px;
           display:flex;
           flex-direction:row;
           justify-content:space-around;
           align-items:center;

        }
        a{
          font-style:none;
          text-decoration:none;
          color:white;
          font-size:24px;
        }
        `}
      </style>
    </div>
  )
}
