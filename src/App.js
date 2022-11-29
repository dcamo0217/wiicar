import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
    return (
        <>
            <Header />
            <hr style={{ margin: 0, border: "1px solid #C5CBDA" }} />
            <Nav />
            <h1>Home</h1>
            <Footer />
        </>
    );
};

export default App;
