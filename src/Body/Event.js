import React from 'react';
// eslint-disable-next-line
import {Container, Row, Col} from 'react-bootstrap';
// eslint-disable-next-line

import events from '../Data/events.json';

// eslint-disable-next-line
const cardStyle = {
  color: 'black',
  maxWidth: '90%',
  padding: '5',
  margin: '5'
}

const rowStyle = {
  borderColor: 'white',
  width: '75vw'
  // borderBottom: 'white'
}
const hStyle = {
  color: 'white',
  textAlign: 'left'
}
const pStyle = {
  fontSize: '16px',
  fontFamily: "Arial",
  textAlign: 'justify',
  lineHeight: '1.25',
  color: '#bbb'
}
const imgStyle = {
  height: '5rem'
}

const noDeco = {
  color: 'inherit',
  textDecoration: 'none'
}

const lineStyle = {
  backgroundColor: '#00FFAA',
  color: '#00FFAA',
  width: '50%',
  border: 'none',
  height: '1px',
  marginRight: '40%'
}

class Event extends React.Component {
  state = {
    lists: events
  };

  filter = () => {
    console.log(window.location.hash);
    if (window.location.hash === "#cleanup") {
      return 1;
    } else if (window.location.hash === "#swap") {
      return 2;
    } else if (window.location.hash === "#plant") {
      return 3;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div>
      {this.state.lists.map((x) => {
        if (x.value == this.filter() || this.filter() == 0) {
          return (
            <>

            <Row className="container mb-3 mt-3 mx-5" style={rowStyle}>
            <Col md={7}  className="container mt-5">
            <h3 style={hStyle} className="p-1"><a href={x.link} style={noDeco}>{x.title}</a></h3>
            <p style={pStyle}>{x.location}</p>
            <p style={pStyle}>{x.time}</p>
            </Col>
            <Col md={3} className="container mt-5">
            <img src={require(`../Images/events/${x.value}.svg`)} alt="" style={imgStyle}/>
            </Col>
            </Row>
            <hr style={lineStyle} />
            </>
          )
        }
        })}
      </div>
    );
  }
}

export default Event;
