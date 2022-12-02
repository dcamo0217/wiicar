import React, { useState } from "react";

import Content from "./components/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";

const App = () => {
    // Aqui debe estar el estado con los datos

    const [content, setContent] = useState(false);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: "1",
                    width: "100%",
                }}
            >
                <Header setContent={setContent} />
                <Nav />
            </div>
            <Content content={content} />
            <Footer content={content} setContent={setContent} />
        </>
    );
};

export default App;
