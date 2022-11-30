import React from "react";
import "./../styles/header.css";
import wiicarIcon from "./../icons/wiicar-icon.png";
import { Icon } from "./Icon";
import { faNavicon, faPowerOff } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/#">
                        <Icon css="nav-icon" icon={faNavicon} />
                    </a>
                    <a className="navbar-brand" href="/#">
                        <span>
                            <img
                                className="logo"
                                src={wiicarIcon}
                                alt="logo.png"
                            />
                        </span>
                        <span className="textIcon">Wiicar</span>
                    </a>
                    <button>
                        <Icon css="poweroff-icon" icon={faPowerOff} />
                        <a href="/#">Salir</a>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
