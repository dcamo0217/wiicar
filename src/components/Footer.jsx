import React from "react";
import "./../styles/footer.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

const Footer = () => {
    return (
        <footer className=" text-center w-100 d-flex align-items-center justify-content-around">
            {/* search bar */}
            <div className="input-group p-3 input-cont">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Busqueda por Coincidencia"
                    aria-label="Busqueda por Coincidencia"
                    aria-describedby="basic-addon2"
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
            {/* dropdown */}
            <div class="dropdown resultados">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Resultados
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a class="dropdown-item" href="/#">
                            5
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/#">
                            10
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/#">
                            20
                        </a>
                    </li>
                </ul>
            </div>
            <div class="dropdown acciones">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a class="dropdown-item" href="/#">
                            Cargue masivo
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/#">
                            Nuevo registro
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
