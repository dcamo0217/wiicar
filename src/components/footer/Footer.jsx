import React from "react";
import PropTypes from "prop-types";

import "./../../styles/footer.css";
import ActionsDropdown from "./ActionsDropdown";
import ResultsDropdown from "./ResultsDropdown";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Footer = ({ content, setContent }) => {
    return (
        // Here we have the general footer component that is going to be used in the main component.
        <footer className=" text-center w-100 d-flex align-items-center justify-content-around flex-wrap">
            <SearchBar />
            <ResultsDropdown />
            <Pagination />
            <ActionsDropdown content={content} setContent={setContent} />
        </footer>
    );
};

Footer.propTypes = {
    content: PropTypes.bool.isRequired,
    setContent: PropTypes.func.isRequired,
};

export default Footer;
