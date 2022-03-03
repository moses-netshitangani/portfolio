import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Background from './background'
import Contact from './contact'
import LandingPage from './landing_page'

export default function Home() {

  return (

    <div className={styles.container}>

      <Head>
        <title>Moses' Portfolio</title>
      </Head>

      <LandingPage />
      <Background />
      <Contact />
      
    </div>
  )
}
