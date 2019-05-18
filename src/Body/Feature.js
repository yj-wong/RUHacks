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
  borderColor: 'white'
}
const hStyle = {
  textAlign: 'left'
}
const pStyle = {
  fontSize: '14px',
  fontFamily: "Arial",
  textAlign: 'justify',
  lineHeight: '1.25'
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
    const { classes } = this.props;

    return (
      <div>
      {this.state.lists.map((x) => {
        return (
          // <Grid container justify="center">
          //   <Card style={cardStyle}>
          //     <Typography component="h5">
          //       {x.title}
          //     </Typography>
          //     <Typography component="p" style={pStyle}>
          //       {x.description} 
          //     </Typography>
          //   </Card>
          // </Grid>


          <Row className="mb-3 mt-3 mx-5">
          <Col md={8}>
          <h2 style={hStyle} className="p-1">{x.title}</h2>
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
