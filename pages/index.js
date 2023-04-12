import style from './Home.module.scss'

import { useContext } from 'react'
import AppContext from '@/context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  return (

    <>

    <h1>Home</h1>

    </>

  )
}
