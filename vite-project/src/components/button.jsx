import React from "react";
import PropTypes from "prop-types";

//onclick and children are the props
function Button({onclick, children}) {
    return (
        <button onClick={onclick}>{children}</button>

    )

}
Button.propTypes = {
    // props onclick have to be a function and required
    onclick: PropTypes.func.isRequired,
    //node = any html
    children: PropTypes.node.isRequired
}
export default Button;