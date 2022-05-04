import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Container, Row, Col } from "react-bootstrap";

import FOOTER_QUERY from "../../queries/footer/footer.js";

import logoBlack from "../../assets/logo_black.svg";
import logoWhite from "../../assets/logo_white.svg";
import logoF from "../../assets/facebook-f.svg";
import logoIN from "../../assets/linkedin-in.svg";

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTER_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const headerAttributes = data.header.data.attributes;
  const headerNome = headerAttributes.Nome;
  const headerLogoURL = process.env.REACT_APP_BACKEND_URL + headerAttributes.Logo.data.attributes.url;

  const footerAttributes = data.footer.data.attributes;
  const footerColunas = footerAttributes.Colunas;

  return (
    <div id="footer" className="footer">
      <div id="footer-bottom">
        <Container>
          <Row>
            <p>94627 - PUB</p>
            <Row>          <ul className="social-list"><li><a href="https://www.facebook.com/LM-Instala%C3%A7%C3%B5es-Eletricas-110138071688000" target="_blank"><img src={logoF} alt="F" width="10" height="18"/></a></li><li><a href="https://www.linkedin.com/company/lm-instala%C3%A7%C3%B5es-el%C3%A9tricas/" target="_blank"><img src={logoIN} alt="in" width="20" height="20"/></a></li></ul>
  </Row>
            <div>© {new Date().getFullYear()} {headerNome} - Todos os direitos reservados.</div>
            <div>Powered by <a href="https://terastudio.pt/" target="_blank" alt="TERASTUDIO"><img id="TERASTUDIO-brand" src={logoWhite} alt="TERASTUDIO"></img></a></div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;