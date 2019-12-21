import Header from './Header'


export default function Layout(props) {
  return (
    <div  className='cont'>
      <Header page={props.page} />
      {props.children}

      <style jsx>
        {`
        .cont{
          margin:0px;
          padding:0px;
        }
        `}
      </style>
    </div>
  )
}
