import React from "react";
import { NavLink} from 'react-router-dom'

import {  Navbar, Container, Nav,  } from "react-bootstrap";


const Navigation = ({ name, url }) => {
  return (
    <Navbar bg="" variant="dark">
      <Container>
        <Nav className="mr-auto">
          <NavLink to={{pathname: "/"}} className="nav-link" >Inicio</NavLink>
          <NavLink to={{pathname: "/servicos"}}  className="nav-link">Serviços</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;