import '@/styles/globals.css'

import { useState } from 'react'
import AppContext from '@/context/AppContext'


export default function App({ Component, pageProps }) {
  
  const [x,setX] = useState(0)
  const [y,setY] = useState("hihi")


  return (
  <>

  <AppContext.Provider
    value={{
      state:{x,y},
      setX,setY
    }}>

    <Component {...pageProps} />

  </AppContext.Provider> 

  </>
  )
}
