import React, { useState } from 'react'
import { Container, Row, Col, Nav, NavItem } from 'reactstrap'
import Block from './components/Block';
import './App.css';
import Number from './components/Number';

function App() {
  const [entier, setEntier] = useState([
    {
      backgroundColor: "rgb(143, 136, 221)",
      title: 1
    },
    {
      backgroundColor: "rgb(136, 221, 174)",
      title: 2
    },
    {
      backgroundColor: "rgb(136, 221, 142)",
      title: 3
    },
    {
      backgroundColor: "rgb(221, 136, 204)",
      title: 4
    },
    {
      backgroundColor: "rgb(215, 136, 221)",
      title: 5
    },
    {
      backgroundColor: "rgb(136, 186, 221)",
      title: 6
    },
    {
      backgroundColor: "rgb(136, 221, 152)",
      title: 7
    },
    {
      backgroundColor: "rgb(136, 162, 221)",
      title: 8
    },
    {
      backgroundColor: "rgb(221, 193, 136)",
      title: 9
    },
  ])
  return (
    <Container>
      <Nav className="d-flex justify-content-between mt-3">
        <NavItem>123 Game</NavItem>
        <NavItem>New Game</NavItem>
      </Nav>
      <Row className="mt-5">
        <Col xs="8" md="6">
          <div>
            {entier.map((item) => <Number entierObjet={item} />)}
          </div>
          <div>9 moves left.</div>
        </Col>
        <Col xs="12" md="3">
          <div className="block-number">
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
