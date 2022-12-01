import React from "react";

const Pagination = () => {
    return (
        <div className="pag-cont mb-3">
            <button className="pag-button">&lt;</button>
            <div className="pag-count">
                <p>1</p>
            </div>
            <span>De</span>
            <span>1000</span>

            <button className="pag-button"> &gt;</button>
        </div>
    );
};

export default Pagination;
