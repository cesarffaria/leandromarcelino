import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


import { Container, Row, Col } from 'react-bootstrap';

//import Slide from "../bootstrap/Slide";
//import Slide from "../components/Slide";
import Slide from "../bootstrap/ReactSlide";

import HOMEPAGE_QUERY from "../queries/homepage/homepage";

const Contactos = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const homepageData = data.homepage.data;
  const homepageAttributes = homepageData.attributes;

  return (
    <div id="body" className="body">
      <Container>
        <Row >
          <Col lg={6}>
            <h1>CONTACTOS</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684.1098957425851!2d-8.723840643864307!3d39.65985795374832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd227623ca8344f7%3A0x174079d8958563f7!2s2495-016!5e0!3m2!1spt-PT!2spt!4v1650727527160!5m2!1spt-PT!2spt" width="100%" height="600" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <ul>
              <li>
                Rua Senhora do Monte, Nº30, Casal dos Lobos 2495-016 São Mamede
              </li>
              <li>
                <a href="mailto:geral@leandromarcelino.pt">geral@leandromarcelino.pt</a>
              </li>
              <li>
                <a href="tel:+351969795742">(+351) 969 795 742</a>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <h1 className="alt-h1">PEÇA UM ORÇAMENTO</h1>
            <form>
              <div className="d-flex">
                <input type="text" name="nome" placeholder="Nome" />
                <input type="text" name="apelido" placeholder="Apelido" />
                <input type="text" name="email" placeholder="E-mail" />
              </div>
              <div className="d-flex">
                <textarea type="text" name="mensagem" placeholder="Mensagem" />
              </div>
              <input type="checkbox" name="rgpd" /><label for="rgpd">Concordo com a política de privacidade deste site</label>
              <div className="d-flex">
                <input type="submit" value="Enviar" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Contactos;
