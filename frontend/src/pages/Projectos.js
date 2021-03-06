import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";


import { Container, Row, Col, Figure } from 'react-bootstrap';

import SERVICOS_NOME_QUERY from "../queries/service/services_names";
import PROJECTS_QUERY from "../queries/project/projects";

import Query from "../components/Query";


const Projectos = () => {
  let [slug, setSlug] = useState("instalacoes-electricas");

  const { data, error, loading } = useQuery(SERVICOS_NOME_QUERY);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  
  return (
    <Container>
      <Row className="project-block">
        <Col lg={4} className="intro-projetos">
          <h1>Portfólio</h1>
          <ul className="lista-projetos">
            {data.servicos.data.map((servico,index) => {
              return (
                <li key={index +1} className={slug === servico.attributes.Slug  ? "active" : "" } >
                  <button onClick={() => ( setSlug(servico.attributes.Slug, false)  )} >
                    {servico.attributes.Nome} <strong>{">"}</strong>
                  </button>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col lg={8} className="project-grid">
          <Query query={PROJECTS_QUERY} slug={slug}>
            {({ data: { servicos } }) => (
              <Row >
                {servicos.data[0].attributes.projetos.data.map((projeto,index) => (
                  <Col lg={3} key={index}>
                    <Link to={`/portfolio/${projeto.attributes.Slug}`} key={projeto.attributes.Slug} className="portfolio-imagem-projeto">
                      <Figure className="img-fix">
                        <Figure.Image 
                          alt={projeto.attributes.Galeria.data[0].attributes.name}
                          src={process.env.REACT_APP_BACKEND_URL + projeto.attributes.Galeria.data[0].attributes.url}
                          width={"100%"}
                          height={"200px"}
                        />
                      </Figure>
                      <h4 className="portfolio-titulo-projeto">{projeto.attributes.Titulo}</h4>
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
          </Query>

        </Col>
      </Row>
    </Container>
  );
};

export default Projectos;