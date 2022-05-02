import React , { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Link } from "react-router-dom";


import { Row, Col, Container, Button } from "react-bootstrap";

import SERVICO_QUERY from "../../queries/service/serviceSingle";
import SERVICOS_NOME_QUERY from "../../queries/service/services_names";


const Service = () => {
  let { slug } = useParams();

  const { data: dataR, error: errorR, loading: landingR } = useQuery(SERVICOS_NOME_QUERY);
  const { loading, error, data } = useQuery(SERVICO_QUERY, {
    variables: { slug: slug }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  let nextSlug = "";
  for(let i=0 ; i < dataR.servicos.data.length + 0 ; i++){
    if ( dataR.servicos.data[i].id == data.servicos.data[0].id){
      if(dataR.servicos.data.length != i+1){
        nextSlug = dataR.servicos.data[i+1].attributes.Slug;
      }
      else{
        nextSlug = dataR.servicos.data[0].attributes.Slug;
      }
    }
  }

  const servicos = data.servicos;

  const imageUrl = process.env.REACT_APP_BACKEND_URL +
    servicos.data[0].attributes.Imagem.data.attributes.url;

  const iconUrl = process.env.REACT_APP_BACKEND_URL +
    servicos.data[0].attributes.Icon.data.attributes.url;

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div className="d-flex gap-4">
            <img
              src={iconUrl}
            />
            <h1 className="tituloServico text-uppercase fw-bold">{servicos.data[0].attributes.Nome}</h1>
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
            src={imageUrl}
            width="100%"
          />
        </Col>
      </Row>
      <div className="space-4" />

      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <div className="buttons-hp d-flex  gap-3">
            <Button variant="primary" onClick={() => console.log("Primary")}>
              AGENDE MARCAÇÃO
            </Button>
            <Button variant="primary" onClick={() => console.log("Primary")}>
              PEDIR ORÇAMENTO
            </Button>
          </div>
        </Col>
        <Col lg={6} className="d-flex justify-content-end">
          <Link to={`/service/${nextSlug}`} className="next-service">Seguinte {'>'}</Link> 
        </Col>
      </Row>
    </Container>
  );
};

export default Service;