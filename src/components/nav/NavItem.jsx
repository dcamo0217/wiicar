import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ name }) => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="/#">
                    {name}
                </a>
            </li>
        </>
    );
};

NavItem.propTypes = {
    name: PropTypes.string,
};

export default NavItem;
