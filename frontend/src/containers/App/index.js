import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Left from "../../components/Left";
import Rigth from "../../components/Rigth";
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

import background from "../../assets/background.jpg";
import background2x from "../../assets/background_2x.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat:"no-repeat", backgroundColor:"black"}}>
      <Container fluid >
        <Row>
          <Col lg={1}>
            <Left />
          </Col>
          <Col lg={10} id="mainContentCol">
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/servicos" element={<Servicos />} exact />
              <Route path="/contactos" element={<Contactos />} exact />
            </Routes>
            {/*<Footer />*/}
          </Col>
          <Col lg={1} className="rigth">
            <Rigth />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;