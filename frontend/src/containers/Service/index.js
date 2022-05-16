import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';


import { Row, Col, Container, Button } from "react-bootstrap";

import SERVICO_QUERY from "../../queries/service/serviceSingle";
import SERVICOS_NOME_QUERY from "../../queries/service/services_names";


const Service = () => {
  let { slug } = useParams();

  const { data: dataR, error: errorR, loading: landingR } = useQuery(SERVICOS_NOME_QUERY);
  const { loading, error, data } = useQuery(SERVICO_QUERY, {
    variables: { slug: slug }
  })

  if (loading || landingR) return <p>Loading...</p>
  if (error || errorR) return <p>Error :(</p>

  let nextSlug = "";
  let prevSlug = "";
  let currentIndex = 0;
  for (let i = 0; i < dataR.servicos.data.length + 0; i++) {
    if (dataR.servicos.data[i].id === data.servicos.data[0].id) {
      if (dataR.servicos.data.length !== i + 1) {
        nextSlug = dataR.servicos.data[i + 1].attributes.Slug;
      }
      else {
        nextSlug = dataR.servicos.data[0].attributes.Slug;
      }
      if (i - 1 === -1) {
        prevSlug = dataR.servicos.data[dataR.servicos.data.length - 1].attributes.Slug;
      }
      else {
        prevSlug = dataR.servicos.data[i - 1].attributes.Slug;
      }
      currentIndex = i;
    }
  }

  const servicos = data.servicos;

  const imageUrl = process.env.REACT_APP_BACKEND_URL +
    servicos.data[0].attributes.Imagem.data.attributes.url;

  const iconUrl = process.env.REACT_APP_BACKEND_URL +
    servicos.data[0].attributes.Icon.data.attributes.url;

  const prevNext = () => {
    if (isMobile) {
      return (
      <Row className="top-service-nav">
        <div className="d-flex justify-content-between nav-ttl">
          <Link to={`/service/${prevSlug}`} className="next-service">{'<'}</Link>
          <p>
            {servicos.data[0].attributes.Nome}
          </p>
          <Link to={`/service/${nextSlug}`} className="next-service">{'>'}</Link>
        </div>
        <div className="container-dots d-flex gap-3 justify-content-center">
          {Array.from({ length: dataR.servicos.data.length }).map((item, index) => (
            <div
            key={index + 1}
              className={currentIndex === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </Row>
      );
    }
  }

  return (
    <Container className="servicos-block">
      {prevNext()}
      <Row>
        <Col lg={6}>
          <div className="d-flex gap-4 tituloServico">
            <img
            alt=""
              src={iconUrl}
            />
            <h1 className="text-uppercase fw-bold">{servicos.data[0].attributes.Nome}</h1>
          </div>
          <div className="space-4" />
          <ReactMarkdown children={servicos.data[0].attributes.Descricao} />
          {/*<p>
          <Moment format="MMM Do YYYY">
            {servicos.data[0].attributes.published_at}
            </Moment>
          </p>*/}
        </Col>
        <Col lg={6}>
          <img
          alt=""
            src={imageUrl}
            width="100%"
          />
        </Col>
      </Row>
      <div className="space-4" />

      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <div className="buttons-hp d-flex  gap-3">
            <Link to={`/contactos`}><Button variant="primary" onClick={() => console.log()}>
              AGENDE MARCAÇÃO
            </Button></Link>
            <Link to={`/contactos`}><Button variant="primary" onClick={() => console.log()}>
              PEDIR ORÇAMENTO
            </Button></Link>
          </div>
        </Col>
        <Col lg={6} className="d-flex justify-content-end nav-btn">
          <Link to={`/service/${nextSlug}`} className="next-service">Seguinte {'>'}</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;