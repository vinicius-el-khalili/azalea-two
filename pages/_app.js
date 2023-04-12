import '@/styles/globals.css'
import FrameLayout from '@/components/frameLayout/frameLayout'
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

    <FrameLayout>
      <Component {...pageProps} />
    </FrameLayout>

  </AppContext.Provider> 

  </>
  )
}
