import React from "react";
import { Link } from "react-router-dom";


import { Row, Col, Container } from "react-bootstrap";

const MyMenu = () => {
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
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to={`/ `}>
                SERVICOS
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