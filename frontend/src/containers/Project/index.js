import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Link } from "react-router-dom";


import { Row, Col, Container, Button } from "react-bootstrap";

import Slide from "../../bootstrap/Slide";


import PROJETO_SINGLE_QUERY from "../../queries/project/projectSingle";
import PROJETOS_NOME_QUERY from "../../queries/project/projects_names";


const Project = () => {
  let { slug } = useParams();

  const { data: dataR, error: errorR, loading: landingR } = useQuery(PROJETOS_NOME_QUERY);
  const { loading, error, data } = useQuery(PROJETO_SINGLE_QUERY, {
    variables: { slug: slug }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  let nextSlug = "";
  for (let i = 0; i < dataR.projetos.data.length + 0; i++) {
    if (dataR.projetos.data[i].id == data.projetos.data[0].id) {
      if (dataR.projetos.data.length != i + 1) {
        nextSlug = dataR.projetos.data[i + 1].attributes.Slug;
      }
      else {
        nextSlug = dataR.projetos.data[0].attributes.Slug;
      }
    }
  }

  //console.log(slug)

  const projetos = data.projetos;

  //console.log(data)
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h1 className="tituloServico text-uppercase fw-bold">{projetos.data[0].attributes.Titulo}</h1>
          <div className="space-4" />
          <ReactMarkdown children={projetos.data[0].attributes.Descricao} />
          <div className="space-4" />

          <Link to={`/portfolio/${nextSlug}`} className="next-service">Seguite {'>'}</Link>
        </Col>
        <Col lg={6}>
          <Row>
            {projetos.data[0].attributes.Galeria.data.map((image, index) => (
              <Col key={index} lg={image.attributes.url == projetos.data[0].attributes.Galeria.data[0].attributes.url ? 8 : 4}>
                <img width={"100%"}
                  src={process.env.REACT_APP_BACKEND_URL + image.attributes.url}
                />
              </Col>
            ))}
          </Row>
          {/*<Slide sliderData={projetos.data[0].attributes.Galeria.data} sliderName="carouselExampleIndicators"></Slide>
            */}
        </Col>
      </Row>
    </Container>
  );
};

export default Project;