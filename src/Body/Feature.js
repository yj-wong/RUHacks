import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
// eslint-disable-next-line

import startups from '../Data/startups.json';

const cardStyle = {
  color: 'black',
  maxWidth: '100%'
}

const rowStyle = {
  borderColor: 'white'
}
const pStyle = {
  textAlign: 'justify',
  lineHeight: '1.25'
}
const leftText = {
  textAlign: 'left'
}
const imgStyle = {
  maxHeight: '100%',
  maxWidth: '100%'
};

class Feature extends React.Component {
  state = {
    lists: startups
  };

  render() {
    return (
      <div>
      {this.state.lists.map((x) => {
        return (
          <Row className="border border-white mb-3 mt-3 mx-5">
          <Col md={8}>
          <h2 style={leftText} className="p-1">{x.title}</h2>
          <p style={pStyle}>{x.description}</p>
          </Col>
          <Col md={2} className="container mt-5">
          <img src={require(`../Images/c${x.value}.png`)} alt="" style={imgStyle}/>
          </Col>
          </Row>
        )
      })}
      </div>
    );
  }
}

export default Feature;
