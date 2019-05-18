import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import { Card, CardContent, CardActionArea, CardMedia, Typography, withStyles, Grid } from '@material-ui/core/';
// eslint-disable-next-line

import startups from '../Data/startups.json';

const cardStyle = {
  color: 'black',
  maxWidth: '90%',
  padding: '5',
  margin: '5'
}

const rowStyle = {
  borderColor: 'white',
  // borderBottom: 'white'
}
const hStyle = {
  color: 'white', 
  textAlign: 'left'
}
const pStyle = {
  fontSize: '14px',
  fontFamily: "Arial",
  textAlign: 'justify',
  lineHeight: '1.25',
  color: '#bbb'
}
const imgStyle = {
  maxHeight: '100%',
  maxWidth: '100%'
}

const noDeco = {
  color: 'inherit',
  textDecoration: 'none'
}

class Feature extends React.Component {
  state = {
    lists: startups
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      {this.state.lists.map((x) => {
        return (
          <Row className="container mb-3 mt-3 mx-5" style={rowStyle}>
          <Col md={7}  className="container mt-5">
          <h3 style={hStyle} className="p-1"><a href={x.link} style={noDeco}>{x.title}</a></h3>
          <p style={pStyle}>{x.description}</p>
          </Col>
          <Col md={3} className="container mt-5">
          <img src={require(`../Images/c${x.value}.jpg`)} alt="" style={imgStyle}/>
          </Col>
          </Row>
        )
      })}
      </div>
    );
  }
}

export default Feature;
