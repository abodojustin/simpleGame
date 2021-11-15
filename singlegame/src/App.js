import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, Button } from "reactstrap";
import Block from "./components/Block";
import "./App.css";
import Number from "./components/Number";

function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let colors = [
  "rgb(143, 136, 221)",
  "rgb(136, 221, 174)",
  "rgb(136, 221, 142)",
  "rgb(221, 136, 204)",
  "rgb(215, 136, 221)",
  "rgb(136, 186, 221)",
  "rgb(136, 221, 152)",
  "rgb(136, 162, 221)",
  "rgb(221, 193, 136)",
];

function App() {
  const blocks= Array.from({ length: 9 }).map((currentElement, i) => ({
    backgroundColor: 'transparent',
    title: '',
  }));

  const [entier, setEntier] = useState([]);
  const [tuileIsClicked, setTuileIsClicked] = useState(false);
  

  const init = () => {
    let suffleColors = randomArrayShuffle(colors);
    let tuiles = Array.from({ length: 9 }).map((currentElement, i) => ({
      backgroundColor: suffleColors[i],
      title: i + 1,
      isClicked: false,
    }));
    setEntier(tuiles);
  };

  const dashedTuile = (itemClicked) => {
   const newTuiles = entier.map((item) =>
      item.title === itemClicked.title
        ? { ...item, isClicked: true }
        : { ...item, isClicked: false }
    );
    setEntier(newTuiles);
    setTuileIsClicked(itemClicked)
  };


  
  React.useEffect(() => {
    init();
  }, []);
  
  return (
    <Container>
      <Nav className="mt-3 d-flex justify-content-between">
        <NavItem>123 Game</NavItem>
        <Button onClick={init}>New Game</Button>
      </Nav>
      <Row className="mt-5">
        <Col xs="8" md="6">
          <div>
            {entier.map((item) => (
              <Number entierObjet={item} onClick={() => dashedTuile(item)} />
            ))}
          </div>
          <div>9 moves left.</div>
        </Col>
        <Col xs="12" md="3">
          <div className="block-number">
            {
              blocks.map(item=> <Block entierObjet={item} tuileIsclicked={tuileIsClicked}/>)
            }
          
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
