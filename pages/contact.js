import { useEffect, useState } from "react";
import Menu from "../components/menu";
import styles from '../styles/Home.module.css'
const axios = require('axios').default;

export default function Contact() {

    // variable to hold joke
    const [joke, setJoke] = useState('')

    // api call to fetch joke
    const getJoke = async() => {
        axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&type=single")
            .then(res => setJoke(res.data.joke))
            .catch(e => console.error(e))
    }

    // initialize joke after page loads
    useEffect(() => {
        if(joke === '')
        {
            getJoke()
        }
    })

    return (
        <div className={styles.ContactContainer}>

            <Menu />

            <div className={styles.ContactDivs}>
                <div className={styles.ContactMail}>
                    <h3>Leave your details and I will contact you:</h3>
                    <div>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Your cell number" />
                        <input type="text" placeholder="Your message" />
                        <button onClick={e => alert("details recieved")}>Send</button>
                    </div>
                </div>

                <div className={styles.ContactSocials}>
                    <h3>Or, get in touch:</h3>
                    <a href="mailto:ntsndi017@myuct.ac.za"></a>
                    <a href="https://linkedin.com/in/moses-netshitangani-2b396417b"></a>
                    <a href="https://github.com/moses-netshitangani"></a>
                </div>
            </div>

            <div className={styles.Joke}>
                <h4>You've made it to the last page of the site, you've earned a wacky joke:</h4>
                <p>{joke}</p>
            </div>


        </div>
    )
}