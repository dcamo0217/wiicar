import React from "react";
import "./../../styles/footer.css";
import ActionsDropdown from "./ActionsDropdown";
import SearchBar from "./SearchBar";

const Footer = () => {
    return (
        <footer className=" text-center w-100 d-flex align-items-center justify-content-around">
            <SearchBar />
            <ActionsDropdown />
        </footer>
    );
};

export default Footer;
