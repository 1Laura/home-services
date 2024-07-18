import PropTypes from 'prop-types';
import React from "react";
import styles from "./categories.module.scss";
import cleaningImg from "../assets/categories/cleaning.png";
import repairImg from "../assets/categories/repair.png";
import paintingImg from "../assets/categories/painting.png";
import shiftingImg from "../assets/categories/shifting.png";
import plumbingImg from "../assets/categories/plumbing.png";
import electricImg from "../assets/categories/electric.png";

export const categoriesNamesAndImg =
    {
        cleaning: cleaningImg,
        repair: repairImg,
        painting: paintingImg,
        shifting: shiftingImg,
        plumbing: plumbingImg,
        electric: electricImg
    }


export const Categories = () => (
    <article>
        <div className={styles.categories}>
            {Object.entries(categoriesNamesAndImg).map(([category, img]) => (
                <div key={category} className={styles.categoryBg}>
                    <img src={img} alt={category}/>
                    <p>{category}</p>
                </div>
            ))}
        </div>
    </article>
);


// Categories.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
// };
export default Categories;