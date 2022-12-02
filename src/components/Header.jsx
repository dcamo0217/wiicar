import React from "react";
import PropTypes from "prop-types";

import "./../styles/header.css";
import wiicarIcon from "./../assets/img/wiicaricon.png";
import wiicarLogo from "./../assets/img/wiicarlogo.png";
import { Icon } from "./Icon";
import { faNavicon, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setContent }) => {
    // Here we have the header component.

    // Here we are using the useState hook to set the state of the content variable.
    const changeContent = () => {
        setContent(false);
    };
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/#">
                        <Icon css="nav-icon" icon={faNavicon} />
                    </a>

                    <a className="navbar-brand" href="/#">
                        <img
                            className="icon"
                            src={wiicarIcon}
                            alt="wiicar-icon"
                            onClick={changeContent}
                        />
                        <img
                            className="logo"
                            src={wiicarLogo}
                            alt="wiicar-icon"
                            onClick={changeContent}
                        />
                    </a>
                    <button>
                        <Icon css="poweroff-icon" icon={faPowerOff} />
                        <a href="/#">Salir</a>
                    </button>
                </div>
            </nav>
            <hr />
        </header>
    );
};

Header.propTypes = {
    setContent: PropTypes.func.isRequired,
};

export default Header;
