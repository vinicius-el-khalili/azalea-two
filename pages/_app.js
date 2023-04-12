import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import FrameLayout from '@/components/frameLayout/frameLayout'

import { useState } from 'react'
import AppContext from '@/context/AppContext'


export default function App({ Component, pageProps }) {

  const [side,setSide] = useState("Home")
  
  return (
  <>

  <AppContext.Provider
    value={{
      state:{
        side
      },
      setSide
    }}>

    <FrameLayout>
      <Component {...pageProps} />
    </FrameLayout>

  </AppContext.Provider> 

  </>
  )
}
