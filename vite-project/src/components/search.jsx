import React, {useState} from "react";
import styles from "./search.module.scss"

const Search = () => {
    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    return (
        <div className={styles.searchContainer}>
            <label htmlFor="name"></label>
            <input
                id="name"
                type="text"
                onChange={handleNameChange}
                value={name}
            />
        </div>
    )
}
export default Search;