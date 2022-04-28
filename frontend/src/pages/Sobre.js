import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


import { Container, Row, Col } from 'react-bootstrap';

//import Slide from "../bootstrap/Slide";
//import Slide from "../components/Slide";
import Slide from "../bootstrap/ReactSlide";

import HOMEPAGE_QUERY from "../queries/homepage/homepage";

const Homepage = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const homepageData = data.homepage.data;
  const homepageAttributes = homepageData.attributes;

  return (
    <div id="body" className="body">
      <Slide sliderData={homepageAttributes.Slider.data} sliderName="carouselExampleIndicators"></Slide>
      <Container>
      start body
        {homepageAttributes.Linhas.map((linha, index) => (
          <Row key={index +1}>
            {linha.Coluna.map((coluna) => (
              <Col key={coluna.id}>
                <ReactMarkdown>
                  {coluna.Titulo}
                </ReactMarkdown>
                <ReactMarkdown>
                  {coluna.Conteudo}
                </ReactMarkdown>
              </Col>
            ))}
          </Row>
        ))}
      start body
      </Container>
    </div>

  );
};

export default Homepage;