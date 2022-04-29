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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;