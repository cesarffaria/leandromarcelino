import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Container, Row, Col } from "react-bootstrap";

import FOOTER_QUERY from "../../queries/footer/footer.js";

import logoBlack from "../../assets/logo_black.svg";
import logoWhite from "../../assets/logo_white.svg";

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
            <Row><ul className="social-list">
            <li><a href="www.facebook.com">f</a></li><li><a href="www.linkedin.com">in</a></li>
              </ul>  </Row>
            <div>© {new Date().getFullYear()} {headerNome} - Todos os direitos reservados.</div>
            <div>Powered by <a href="https://terastudio.pt/" target="_blank" alt="TERASTUDIO"><img id="TERASTUDIO-brand" src={logoWhite} alt="TERASTUDIO"></img></a></div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;