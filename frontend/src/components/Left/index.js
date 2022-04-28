import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {Row, Col} from "react-bootstrap";


//import Navigation from "../Navigation";

//import HEADER_QUERY from "../../queries/header/header.js";


const Left = () => {
    /*const { loading, error, data } = useQuery(HEADER_QUERY)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
   
  
    const headerAttributes = data.header.data.attributes;
    const headerNome = headerAttributes.Nome;
    const headerLogoURL = process.env.REACT_APP_BACKEND_URL + headerAttributes.Logo.data.attributes.url;
      */
    return (
        <div id="leftBar" className="leftBar">
            <Row className="flex-column justify-content-between">
                <Col lg={2}>logo</Col>
                <Col lg={6}>94627 - PUB</Col>
                <Col lg={4}>©Leandro Marcelino 2022. Todos os direitos reservados.</Col>
            </Row>
        </div>
    );
};

export default Left;