import React from "react";
import * as XLSX from "xlsx";

const ActionsDropdown = () => {
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
                        <a className="dropdown-item" href="/#">
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

export default ActionsDropdown;
