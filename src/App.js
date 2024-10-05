
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import BlogPost from "./components/BlogPost";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" component={Gallery} />
                <Route path="/post/:id" component={BlogPost} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;