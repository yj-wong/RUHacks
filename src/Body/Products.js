import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from 'react-bootstrap';
// eslint-disable-next-line
import Product_list from './Product_list.js'

import items from '../Data/items.json';

const wordStyle = {
  color: 'black'
}
const imgStyle = {
  maxHeight: '50%',
  maxWidth: '100%'
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 280,
    width: 200,
  },

  image: {
    height: 200,
    width: 100,
  }
});

class Products extends React.Component {
  state = {
    spacing: '16',
    lists: items
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Container>
      <Grid justify="center" className={classes.root} spacing={16} item xs={12} container className={classes.demo} justify="center" spacing={Number(spacing)}>

      {this.state.lists.map((x) => {
        return (
          <Grid key={x.value} item className="m-2">
          <Paper className="container" className={classes.paper} style={wordStyle}>
          <p>Title: {x.title}</p>
          <img src={require(`../Images/${x.value}.jpg`)} alt="" style={imgStyle} className={classes.img}/>
          <p>Description: {x.description}</p>
          </Paper>
          </Grid>
        )
      })}
      </Grid>
      </Container>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
