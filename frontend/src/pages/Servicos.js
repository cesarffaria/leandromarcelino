import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";

import { Container, Row, Col } from 'react-bootstrap';

import SERVICOS_QUERY from "../queries/service/service";

const Servicos = () => {
  const { loading, error, data } = useQuery(SERVICOS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const servicosData = data.servicos.data;

  return (
    <div id="body" className="body">
      <Container>
        start body
        <Row>
          {servicosData.map((servico) => (
                <Col key={servico.id}>
                  <img src={process.env.REACT_APP_BACKEND_URL + servico.attributes.Imagem.data.attributes.url} alt={servico.attributes.Nome} />
                  <ReactMarkdown>
                    {servico.attributes.Nome}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {servico.attributes.Descricao}
                  </ReactMarkdown>
                </Col>
          ))}
        </Row>
        start body
      </Container>
    </div>

  );
};

export default Servicos;