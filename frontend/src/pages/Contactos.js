import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


import { Container, Row, Col } from 'react-bootstrap';

//import Slide from "../bootstrap/Slide";
//import Slide from "../components/Slide";
import Slide from "../bootstrap/ReactSlide";

import HOMEPAGE_QUERY from "../queries/homepage/homepage";

const Contactos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    apelido: "",
    email: "",
    mensagem: ""
  })

  
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const homepageData = data.homepage.data;
  const homepageAttributes = homepageData.attributes;



  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      // GET request using fetch with async/await
      const element = document.querySelector('#get-request-async-await .total');
      const response = await fetch(`https://leandromarcelino.pt/PHPMailer/example.php/?nome=${formData.nome}&apelido=${formData.apelido}&email=${formData.email}&mensagem=${formData.mensagem}`);
      const data = await response.json();
      element.innerHTML = data.total;
    })()
  }
  
  return (
    <div id="body" className="body">
      <Container className="contact-block">
        <Row >
          <Col lg={6}>
            <h1>CONTACTOS</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684.1098957425851!2d-8.723840643864307!3d39.65985795374832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd227623ca8344f7%3A0x174079d8958563f7!2s2495-016!5e0!3m2!1spt-PT!2spt!4v1650727527160!5m2!1spt-PT!2spt" width="100%" height="600" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <ul className="contact-list">
              <li className="morada">
                Rua Senhora do Monte, Nº30, Casal dos Lobos 2495-016 São Mamede
              </li>
              <li className="email">
                <a href="mailto:geral@leandromarcelino.pt">geral@leandromarcelino.pt</a>
              </li>
              <li className="tlml">
                <a href="tel:+351969795742">(+351) 969 795 742</a>
              </li>
            </ul>
          </Col>
          <Col lg={6} className="contact-form">
            <h1 className="alt-h1">PEÇA UM ORÇAMENTO</h1>
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <input onChange={(e) => setFormData({...formData, nome: e.target.value})} value={formData.nome} type="text" name="nome" placeholder="Nome" required />
                <input onChange={(e) => setFormData({...formData, apelido: e.target.value})} value={formData.apelido} type="text" name="apelido" placeholder="Apelido" required />
                <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="text" name="email" placeholder="E-mail" required />
              </div>
              <div className="d-flex">
                <textarea onChange={(e) => setFormData({...formData, mensagem: e.target.value})} value={formData.mensagem} type="text" name="mensagem" placeholder="Mensagem" required/>
              </div>
              <div className="rgdp-block"><input type="checkbox" name="rgpd" required /><label htmlFor="rgpd">Concordo com a política de privacidade deste site</label></div>
              <div className="d-flex">
                <input type="submit" value="Enviar" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Contactos;
