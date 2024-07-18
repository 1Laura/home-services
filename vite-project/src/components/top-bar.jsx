import React from 'react';
import {useState} from "react";
import {routes} from "../navigation/router.jsx";
import {Link, useNavigate} from "react-router-dom";
import styles from "./top-bar.module.scss";
import logo from "../assets/logo.svg";
import Button from "./button.jsx";

const TopBar = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/login");
    }

    return (
        <div className={styles.menu}>
            <div className={styles.topBar}>
                <Link to={routes.HOME}>
                    <img src={logo} alt="logo"/>
                </Link>

                <div className={styles.menu}>
                    {Object.entries(routes).map(([key, url]) => (
                        <Link to={url} key={key} className={styles.menuLink}>
                            {key}
                        </Link>
                    ))}
                </div>
                <div>
                    <Button onclick={onClick}>Login / Sign Up</Button>
                </div>
            </div>
        </div>
    )
}
export default TopBar;