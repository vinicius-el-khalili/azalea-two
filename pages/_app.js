import '@/styles/globals.css'

import { useState } from 'react'
import AppContext from '@/context/AppContext'


export default function App({ Component, pageProps }) {

  const [side,setSide] = useState("right")
  
  return (
  <>

  <AppContext.Provider
    value={{
      state:{
        side
      },
      setSide
    }}>

    <Component {...pageProps} />

  </AppContext.Provider> 

  </>
  )
}
