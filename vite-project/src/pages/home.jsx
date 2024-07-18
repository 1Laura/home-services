import React from 'react';
import TopBar from "../components/top-bar.jsx";
import styles from "./home.module.scss";


const Home = () => {
    return (
        <header>
            <TopBar/>
            <article>
                <h1 className={styles.title}>Find Home <span className={styles.textPrimaryColor}>Service/Repair</span> Near <br/>You</h1>
                <p className={styles.textGreyColor}><strong>Explore Best Home Service & Repair near you</strong></p>
            </article>
            <article>
                <p>Search</p>
            </article>
            <article>
                <div className={styles.categories}>
                    <p>category block</p>
                </div>
            </article>

        </header>

    )
}
export default Home;