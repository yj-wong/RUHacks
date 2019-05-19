import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Button } from 'react-bootstrap';
// eslint-disable-next-line

import waste from '../Data/waste.json';

const pStyle = {
  // textAlign: 'left'
  color: '#bbb'
};

const imgStyle = {
  height: '10rem'
}

const boxStyle = {
  backgroundColor: 'Transparent',
  borderStyle: 'solid',
  borderWidth: '3px',
  borderColor: '#00FFAA',
  width: '75vw'
}

class Waste extends React.Component {
  state = {
    spacing: '12',
    lists: waste
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <>
        <br />
        {this.state.lists.map((x) => {
          return(
            <div id={x.id}>
              <Jumbotron style={boxStyle}>
                <h1>{x.title}</h1>
                <p style={pStyle}>{x.body}</p>
                <img src={require(`../Images/waste/${x.value}.svg`)} style={imgStyle} />
                <br /><br />
                <Button variant="outline-info">Donate</Button>
                <Button variant="outline-info">Process</Button>
              </Jumbotron>
            </div>
          )
        })}
      </>
    )
  }
}

export default Waste;
