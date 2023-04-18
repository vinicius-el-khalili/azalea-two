import style from './Home.module.scss'
import { useContext } from 'react'
import AppContext from '@/context/AppContext'

import TypedWords from '@/components/typedWords/typedWords' 

export default function Home() {
  const context = useContext(AppContext)
  return (

    <div className={style.mainContainer}>
      <div className={style.typedWords}>
          
          <TypedWords
          texts={[
            `< >< / >`,
            `{ ' ' : { } }`,
            `[ ... { } ]`,
            `? { } : { } `
          ]}/>


      </div>
    </div>

  )
}
