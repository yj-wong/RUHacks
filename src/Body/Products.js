import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from 'react-bootstrap';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 280,
    width: 200,
  },
});

const items = Array.from(Array(10).keys())

class Products extends React.Component {
  state = {
    spacing: '16',
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
            <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                {items.map(value => (
                    <Grid key={value} item>
                    <Paper className={classes.paper} />
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
      </Container>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);