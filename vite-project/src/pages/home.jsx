import React from 'react';
import TopBar from "../components/top-bar.jsx";
import styles from "./home.module.scss";
import cleaningImg from "../assets/categories/cleaning.png";
import {Categories} from "../components/categories.jsx";
import Search from "../components/search.jsx";

export const categories = {
    cleaning: cleaningImg
    // repair: "src='./assets/categories/repair.png'",
    // painting: "src='./assets/categories/painting.png'",
    // shifting: "src='./assets/categories/shifting.png'",
    // plumbing: "src='./assets/categories/plumbing.png'",
    // electric: "src='./assets/categories/electric.png'",

}

const Home = () => {
    return (
        <header>
            <TopBar/>
            <article>
                <h1 className={styles.title}>Find Home <span className={styles.textPrimaryColor}>Service/Repair</span> Near <br/>You</h1>
                <p className={styles.textGreyColor}><strong>Explore Best Home Service & Repair near you</strong></p>
            </article>
            <Search/>
            <Categories/>

        </header>
    )
}
export default Home;