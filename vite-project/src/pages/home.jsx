import React from 'react';
import TopBar from "../components/top-bar.jsx";
import styles from "./home.module.scss";
import {Categories} from "../components/categories.jsx";
import Search from "../components/search.jsx";


const Home = () => {
    return (
        <>
            <TopBar/>
            <div>
                <h1 className={styles.title}>Find Home <span className={styles.textPrimaryColor}>Service/Repair</span> Near <br/>You</h1>
                <p className={styles.textGreyColor}><strong>Explore Best Home Service & Repair near you</strong></p>
            </div>
            <Search/>
            <Categories/>
        </>
    )
}
export default Home;