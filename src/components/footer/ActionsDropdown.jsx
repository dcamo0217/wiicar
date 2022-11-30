import React from "react";

const ActionsDropdown = () => {
    return (
        <>
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
        </>
    );
};

export default ActionsDropdown;
