import Head from 'next/head'
// import Menu from '../components/menu'
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
    // <div className={styles.HomeContainer}>

    //         <Head>
    //           <title>Moses' Portfolio</title>
    //         </Head>

    //         <Menu />
    //         <h1 className={styles.typewriter}>
    //             <span className={styles.bracket}>&lt;</span>Hello <span className={styles.bracket}>/&gt;</span>
    //             ... I'm Moses
    //         </h1>
            
    //         <div className={styles.selfie}></div>

    //         <h2 className={styles.title}>Software Developer</h2>

    //         <div className={styles.Scroll}></div>

    //         <div className={styles.Area}>
    //             <ul className={styles.Circles}>
    //                 <li>Git</li>
    //                 <li>Nodejs</li>
    //                 <li>Golang</li>
    //                 <li>Javascript</li>
    //                 <li>HTML</li>
    //                 <li>CSS</li>
    //                 <li>Unity2D</li>
    //                 <li>Virtual Reality</li>
    //                 <li>React</li>
    //                 <li>RESTful API</li>
    //             </ul>
    //         </div>
    //     </div>
  )
}
