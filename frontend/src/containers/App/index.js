import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';



import Left from "../../components/Left";
import Rigth from "../../components/Rigth";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import Homepage from "../../pages/Homepage"
import Servicos from "../../pages/Servicos";
import Contactos from "../../pages/Contactos";
import Service from "../Service";
import Projecto from "../Project";
import Projectos from "../../pages/Projectos";
import Menu from "../../pages/MyMenu";
//import Articles from "../Articles";
//import Article from "../Article";
//import Category from "../Category";
import Footer from "../../components/Footer"
import FooterMobile from "../../components/FooterMobile"




//<Route path="/article/:slug" element={<Article />} exact />
//<Route path="/category/:slug" element={<Category />} exact />

import background from "../../assets/background.jpg";
import background2x from "../../assets/background_2x.jpg";

function App() {
  const left = () => {
    if (!isMobile) {
      return (
        <Col lg={1}>
          <Left />
        </Col>
      );
    }
  }
  const right = () => {
    if (!isMobile) {
      return (
        <Col lg={1} className="rigth">
          <Rigth />
        </Col>
      );
    }
  }

  return (
    <div className="App" >
      <Container fluid style={{ backgroundImage: `url(${background2x})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundColor: "black" }} >
        <Row>
          {left()}
          <Col lg={isMobile ? 12 : 10} id="mainContentCol">
            {!isMobile ? <Header /> : <HeaderMobile />}
            <div id="body" className="body">
              {/*<Slide sliderData={homepageAttributes.Slider.data} sliderName="carouselExampleIndicators"></Slide>*/}
              <div className="space-4" />
              <Routes>
                <Route path="/" element={<Homepage />} exact />
                <Route path="/servicos" element={<Servicos />} exact />
                <Route path="/portfolio" element={<Projectos />} exact />
                <Route path="/portfolio/:slug" element={<Projecto />} exact />
                <Route path="/service/:slug" element={<Service />} exact />
                <Route path="/contactos" element={<Contactos />} exact />
                <Route path="/menu" element={<Menu />} exact />
              </Routes>
            </div>
            {!isMobile ? "" : <FooterMobile />}
          </Col>
          {right()}
        </Row>
      </Container>
    </div>
  );
}

export default App;