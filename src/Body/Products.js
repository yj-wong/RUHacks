import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography, withStyles } from '@material-ui/core/';
// eslint-disable-next-line

import items from '../Data/items.json';
import Product_page from './Product_page.js';

const wordStyle = {
  color: 'grey'
};

const styles = theme => ({
  root: {
    flex: 1,
    Grow: 1,
  },
  card: {
    height: 320,
    width: 250,
  },
  media: {
    height: 250,
  }
});



class Products extends React.Component {
  state = {
    spacing: '12',
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
      <Grid justify="center" className={classes.root} spacing={12} item xs={12} container className={classes.demo} justify="center" spacing={Number(spacing)}>

      {this.state.lists.map((x) => {
        return (
          <Grid key={x.value} item className="m-2">
            <Card className={classes.card}>
                <CardActionArea> 
                    <CardMedia className={classes.media} image={require(`../Images/products/${x.value}.jpg`)} />
                </CardActionArea>
                    <CardContent>
                        <Typography component="subtitle1" variant="subtitle1">
                            {x.title}
                        </Typography>
                        <Typography component="p" style={wordStyle}>
                            CA${x.price}
                        </Typography>
                    </CardContent>
            </Card>
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
