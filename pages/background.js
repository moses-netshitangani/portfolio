import styled from "styled-components";
import Menu from "../components/menu";
import styles from '../styles/Home.module.css'

export default function Background() {

    return (
        <div className={styles.AboutContainer}>

            <Menu />

            <div className={styles.AboutHeadings}>
                <h2>Academics/Career</h2>
                <h2>Some Projects</h2>
            </div>

            <div className={styles.Academics}>
                <p className={styles.p}><b>High School</b>: Progress Comprehensive High School
                    <br />7 distinctions
                    <br />Top 5th student in Gauteng SSIP schools
                </p>
                <p className={styles.p}><b>Undergraduate (BSc)</b>: University of Cape Town
                    <br />Computer Sciences & Applied Statistics
                    <br />Dean's List of Merit
                </p>
                <p className={styles.p}><b>Postgraduate (Bsc Hons)</b>: University of Cape Town
                    <br />Computer Sciences
                </p>
                <p className={styles.p}><b>Junior Developer</b>: Allan Gray
                    <br />Retail IT Dev 1.1
                </p>
            </div>

            <div className={styles.Projects}>

                <div className={styles.ProjectCard}>
                    <div className={styles.CardTop}>
                        <h5>Dr Death</h5>
                        <p>
                            A comedic horror Virtual Reality (VR)
                            game about resurrecting a funny human
                            skeleton
                        </p>
                    </div>
                    <div className={styles.CardBottom}>
                        <p>Unity + SteamVR</p>
                    </div>
                </div>

                <div className={styles.ProjectCard}>
                    <div className={styles.CardTop}>
                        <h5>OnlineSuccess</h5>
                        <p>
                            A POC LMS for UCT with an integrated 
                            forum and asynchronous student-lecturer 
                            interaction capabilities 
                        </p>
                    </div>
                    <div className={styles.CardBottom}>
                        <p>MERN stack</p>
                    </div>
                </div>

                <div className={styles.ProjectCard}>
                    <div className={styles.CardTop}>
                        <h5>imgCryptoSystem</h5>
                        <p>
                            A PGP cryptosystem that allows
                            the transfer of encrypted image files
                            between 2 clients
                        </p>
                    </div>
                    <div className={styles.CardBottom}>
                        <p>Java</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}