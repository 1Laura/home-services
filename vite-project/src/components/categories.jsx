import PropTypes from 'prop-types';
import styles from "../pages/home.module.scss";
import React from "react";
import {categories} from "../pages/home.jsx";

export function Categories({onClick, children}) {
    return (
        <article className={styles.categories}>
            <div className={styles.categoryBg} onClick={onClick}>
                <img src={categories.cleaning} alt=""/>
                <p>{children}</p>
            </div>
            <div className={styles.categoryBg}>
                <img src="" alt=""/>
                <p>Category name</p>
            </div>
        </article>
    )
}

Categories.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};