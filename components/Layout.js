import React from 'react'
import {Container} from 'semantic-ui-react'
import Header from './Header'
import Head from 'next/head';



const Layout = (props) => {
    return (
        <div >
              <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
              </Head>


<Container>
  <Header  /> 
  {props.children}

  </Container>
        </div>

        
    )
}

export default Layout
