import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { useContext } from 'react'
import AppContext from '@/context/AppContext'
import Cube from '@/components/cube/cube'
import NavButtonCollection from '@/components/navButton/NavButtonGroup/NavButtonGroup'

export default function Home() {
  const context = useContext(AppContext)

  return (

    <>
    </>

  )
}
