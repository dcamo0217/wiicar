import React, { useState } from "react";

const Pagination = () => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="pag-cont">
            <button className="pag-button" onClick={decrement}>
                &lt;
            </button>
            <div className="pag-count">
                <p>{counter}</p>
            </div>
            <span>De</span>
            <span>1000</span>

            <button className="pag-button" onClick={increment}>
                {" "}
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
