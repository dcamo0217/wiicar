import React from "react";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";

const App = () => {
    return (
        <>
            <Header />
            <hr style={{ margin: 0, border: "1px solid #C5CBDA" }} />
            <Nav />
            <Content />
            <Footer />
        </>
    );
};

export default App;
