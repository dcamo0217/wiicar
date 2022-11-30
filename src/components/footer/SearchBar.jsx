import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";

const SearchBar = () => {
    return (
        <>
            <div className="input-group p-3 input-cont">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Busqueda por Coincidencia"
                    aria-label="Busqueda por Coincidencia"
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary searchBtn"
                        type="button"
                    >
                        <Icon css="search-icon" icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
