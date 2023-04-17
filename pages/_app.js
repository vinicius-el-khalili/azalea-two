import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import layoutStyleMap from '@/context/layoutStyleMap'

import { useState } from 'react'
import AppContext from '@/context/AppContext'


export default function App({ Component, pageProps }) {
  const [page,setPage] = useState("Home")
  return (
  <>

  <AppContext.Provider
    value={{
      state:{
        page
      },
      setPage,
      layoutStyleMap
    }}>

    <Layout>
      <Component {...pageProps} />
    </Layout>

  </AppContext.Provider> 

  </>
  
  )
}
