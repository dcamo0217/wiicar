import React from "react";

import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";

const App = () => {
    // Aqui debe estar el estado con los datos

    return (
        <>
            <Header />
            <Nav />
            <Content />
            <Footer />
        </>
    );
};

export default App;
