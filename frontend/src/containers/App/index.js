import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../components/Header";
import Homepage from "../../pages/Homepage"
import Servicos from "../../pages/Servicos";
//import Articles from "../Articles";
//import Article from "../Article";
//import Category from "../Category";
import Footer from "../../components/Footer"

//<Route path="/article/:slug" element={<Article />} exact />
//<Route path="/category/:slug" element={<Category />} exact />

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/servicos" element={<Servicos />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;