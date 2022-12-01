import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ name, icon, view_name }) => {
    return (
        <>
            <li className="nav-item nav-wiicar">
                <a className="nav-link" href="/#">
                    <img src={icon} alt={name} />
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
