import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Slide from "../bootstrap/Slide";

import HOMEPAGE_QUERY from "../queries/homepage/homepage";

const Homepage = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const homepageData = data.homepage.data;
  const homepageAttributes = homepageData.attributes;

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img
            alt={homepageAttributes.LEANDROMARCELINO.data.attributes.name}
            src={process.env.REACT_APP_BACKEND_URL + homepageAttributes.LEANDROMARCELINO.data.attributes.url}
            className="d-inline-block align-top"
            width={"80%"}
          />
          <div className="space-4"></div>
          <ReactMarkdown>
            {homepageAttributes.Descricao}
          </ReactMarkdown>
          <div className="space-2" />
          <a className="contacto-telefonico-hp" href={`tel:${homepageAttributes.Contacto}`}>{homepageAttributes.Contacto}</a>
        </Col>
        <Col lg={6}>
          <Slide sliderData={homepageAttributes.Slider.data} sliderName="carouselExampleIndicators"></Slide>
        </Col>
      </Row>
      <div className="space-4" />
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <div className="buttons-hp d-flex  gap-3">
          <Link to={`/contactos`}><Button variant="primary" onClick={() => console.log("Primary")}>
              AGENDE MARCAÇÃO
            </Button></Link>
            <Link to={`/contactos`}><Button variant="primary" onClick={() => console.log("Primary")}>
              PEDIR ORÇAMENTO
            </Button></Link>
          </div>
        </Col>
        <Col lg={6}>
          <Row>
            {homepageAttributes.Colunas.map((coluna, index) => (
              <Col key={index} lg={4}>
                <h3>{coluna.Titulo}</h3>
                <p>{coluna.Conteudo}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>


  );
};

export default Homepage;