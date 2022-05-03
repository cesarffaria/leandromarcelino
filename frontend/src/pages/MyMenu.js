import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import SERVICOS_NOME_QUERY from "../queries/service/services_names";


import { Row, Col, Container } from "react-bootstrap";

const MyMenu = () => {
  const { loading, error, data } = useQuery(SERVICOS_NOME_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <ul className="Menu-list">
            <li>
              <Link to={`/`}>
                SOBRE
              </Link>
            </li>
            <li>
              <Link to={`/portfolio`}>
                PORTFóLIO
              </Link>
            </li>
            <li>
              <Link to={`/service/${data.servicos.data[0].attributes.Slug}`}>
                SERVIçOS
              </Link>
            </li>
            <li>
              <Link to={`/contactos`}>
                CONTACTOS
              </Link>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default MyMenu;