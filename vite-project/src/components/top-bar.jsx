import React from 'react';
import { routes} from "../navigation/router.jsx";
import {Link} from "react-router-dom";
import styles from "./top-bar.module.scss";
import logo from "../assets/logo.svg";
const TopBar = () => {
    return (
        <header className={styles.menu}>
            <div className={styles.topBar}>
                <Link to={routes.HOME}>
                    <img src={logo} alt="logo" />
                </Link>

                <div className={styles.menu}>
                    {Object.entries(routes).map(([key, url]) => (
                        <Link to={url} key={key} className="menuLink">
                            {key}
                        </Link>
                    ))}
                </div>
            </div>
        </header>

    )
}
export default TopBar;