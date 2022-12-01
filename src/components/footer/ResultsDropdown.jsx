import React from "react";
import "./../../styles/footer.css";

const ResultsDropdown = () => {
    return (
        <>
            <form className="results-form mb-3" action="">
                <label htmlFor="title-form">Resultados</label>
                <select name="pages" id="pages">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </form>
        </>
    );
};

export default ResultsDropdown;
