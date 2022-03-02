import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'

export default function LandingPage (){

    return (
        <div className={styles.HomeContainer}>

            <Menu />
            <h1 className={styles.typewriter}>
                <span className={styles.bracket}>&lt;</span>Hello <span className={styles.bracket}>/&gt;</span>
                ... I'm Moses
            </h1>
            
            <div className={styles.selfie}></div>

            <h2 className={styles.title}>Software Developer</h2>

            <a href='#about'>
                <div className={styles.Scroll}></div>
            </a>

            <div className={styles.Area}>
                <ul className={styles.Circles}>
                    <li>Git</li>
                    <li>Nodejs</li>
                    <li>Golang</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Unity2D</li>
                    <li>Virtual Reality</li>
                    <li>React</li>
                    <li>RESTful API</li>
                </ul>
            </div>
        </div>
    )

}