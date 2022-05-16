import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';


import { Row, Col, Container } from "react-bootstrap";



import PROJETO_SINGLE_QUERY from "../../queries/project/projectSingle";
import PROJETOS_NOME_QUERY from "../../queries/project/projects_names";


const Project = () => {
  let { slug } = useParams();

  const { data: dataR, error: errorR, loading: landingR } = useQuery(PROJETOS_NOME_QUERY);
  const { loading, error, data } = useQuery(PROJETO_SINGLE_QUERY, {
    variables: { slug: slug }
  })

  if (loading || landingR) return <p>Loading...</p>
  if (error || errorR) return <p>Error :(</p>

  let nextSlug = "";
  let prevSlug = "";
  let currentIndex = 0;
  for (let i = 0; i < dataR.projetos.data.length + 0; i++) {
    if (dataR.projetos.data[i].id === data.projetos.data[0].id) {
      if (dataR.projetos.data.length !== i + 1) {
        nextSlug = dataR.projetos.data[i + 1].attributes.Slug;
      }
      else {
        nextSlug = dataR.projetos.data[0].attributes.Slug;
      }
      if (i - 1 === -1) {
        prevSlug = dataR.projetos.data[dataR.projetos.data.length - 1].attributes.Slug;
      }
      else {
        prevSlug = dataR.projetos.data[i - 1].attributes.Slug;
      }
      currentIndex = i;
    }
  }


  const prevNext = () => {
    if (isMobile) {
      return (
      <Row className="top-service-nav">
        <div className="d-flex justify-content-between nav-ttl">
          <Link to={`/portfolio/${prevSlug}`} className="next-service">{'<'}</Link>
          <p>
            {projetos.data[0].attributes.Titulo}
          </p>
          <Link to={`/portfolio/${nextSlug}`} className="next-service">{'>'}</Link>
        </div>
        <div className="container-dots d-flex gap-3 justify-content-center">
          {Array.from({ length: dataR.projetos.data.length }).map((item, index) => (
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

  const next = () => {
    if (!isMobile) {
      return (
        <Link to={`/portfolio/${nextSlug}`} className="next-service">Seguinte {'>'}</Link>
      );
    }
  }

  //console.log(slug)

  const projetos = data.projetos;

  //console.log(data)
  return (
    <Container>
      {prevNext()}
      <Row>
        <Col lg={6}>
          <h1 className="tituloServico text-uppercase fw-bold">{projetos.data[0].attributes.Titulo}</h1>
          <div className="space-4" />
          <ReactMarkdown children={projetos.data[0].attributes.Descricao} />
          <div className="space-4" />
            {next()}
        </Col>
        <Col lg={6} className="portfolio-gallery">
          <Row>
            {projetos.data[0].attributes.Galeria.data.map((image, index) => (
              <Col key={index} lg={image.attributes.url === projetos.data[0].attributes.Galeria.data[0].attributes.url ? 8 : 4}>
                <img width={"100%"}
                alt=""
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