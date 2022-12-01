import React from "react";

import "./../../styles/footer.css";
import ActionsDropdown from "./ActionsDropdown";
import ResultsDropdown from "./ResultsDropdown";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Footer = () => {
    return (
        <footer className=" text-center w-100 d-flex align-items-center justify-content-around flex-wrap">
            <SearchBar />
            <ResultsDropdown />
            <Pagination />
            <ActionsDropdown />
        </footer>
    );
};

export default Footer;
