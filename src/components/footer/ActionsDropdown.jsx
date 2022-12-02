import React from "react";
import PropTypes from "prop-types";

const ActionsDropdown = ({ content, setContent }) => {
    // Here we are using the useState hook to set the state of the content variable.
    const changeContent = () => {
        setContent(true);
    };

    return (
        <>
            <div className="dropdown acciones">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Acciones
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <a
                            className="dropdown-item"
                            href="/#"
                            onClick={changeContent}
                        >
                            Cargue masivo
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/#">
                            Nuevo registro
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

ActionsDropdown.propTypes = {
    content: PropTypes.bool.isRequired,
    setContent: PropTypes.func.isRequired,
};

export default ActionsDropdown;
