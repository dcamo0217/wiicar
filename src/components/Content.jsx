import React from "react";
import PropTypes from "prop-types";

import "./../styles/content.css";
import Table from "./Table";

const Content = ({ content }) => {
    return (
        <div className="content-body">
            <div className="container content-container">
                {content == true ? (
                    <Table />
                ) : (
                    <div className="container table-container">
                        <p>No existen datos para mostrar</p>
                    </div>
                )}
            </div>
        </div>
    );
};

Content.propTypes = {
    content: PropTypes.bool.isRequired,
};

export default Content;
