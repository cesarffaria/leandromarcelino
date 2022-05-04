import React from "react";
import { NavLink} from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks";

import {  Navbar, Container, Nav,  } from "react-bootstrap";

import SERVICOS_NOME_QUERY from "../../queries/service/services_names";

const Navigation = ({ name, url }) => {

  const { loading, error, data } = useQuery(SERVICOS_NOME_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Navbar bg="" variant="dark">
      <Container>
        <Nav className="mr-auto">
          { data.servicos.data.map((servico) => (
            <NavLink key={servico.id} to={{pathname: `/service/${servico.attributes.Slug}`}} className="nav-link" >{servico.attributes.Nome}</NavLink>
          ))}
          <ul className="social-list"><li><a href="https://www.facebook.com/LM-Instala%C3%A7%C3%B5es-Eletricas-110138071688000" target="_blank">f</a></li><li><a href="https://www.linkedin.com/company/lm-instala%C3%A7%C3%B5es-el%C3%A9tricas/" target="_blank">in</a></li></ul>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;