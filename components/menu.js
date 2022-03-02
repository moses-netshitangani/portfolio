import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Menu () {

    const goHome = () => {
        window.location = "/"
    }

    const goAbout = () => {
        window.location = "/background"
    }

    const goContact = () => {
        window.location = "/contact"
    }

    return (
        <div className={styles.MenuContainer}>

            <h3 onClick={goHome}>Home</h3>
            <h3 onClick={goAbout}>About Me</h3>
            <h3 onClick={goContact}>Contact</h3>

        </div>
    )
}