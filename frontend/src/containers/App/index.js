import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


import Left from "../../components/Left"; 
import Header from "../../components/Header";
import Homepage from "../../pages/Homepage"
import Servicos from "../../pages/Servicos";
import Contactos from "../../pages/Contactos"
//import Articles from "../Articles";
//import Article from "../Article";
//import Category from "../Category";
import Footer from "../../components/Footer"

//<Route path="/article/:slug" element={<Article />} exact />
//<Route path="/category/:slug" element={<Category />} exact />

function App() {
  return (
    <div className="App">
      <Row>
        <Col lg={1}>
          <Left />
        </Col>
        <Col lg={10}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/servicos" element={<Servicos />} exact />
            <Route path="/contactos" element={<Contactos />} exact />
          </Routes>
          {/*<Footer />*/}
        </Col>
        <Col lg={1}>
          
        </Col>
      </Row>

    </div>
  );
}

export default App;