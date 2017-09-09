import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';

import InterestList from './InterestList.jsx';
import AppliedList from './AppliedList.jsx';
import InterviewList from './InterviewList.jsx';
import PostInterviewList from './PostInterviewList.jsx';
import { fetchCards } from '../actions/index.js';


const style = {
  padding: 3,
  textAlign: 'center',
};

class LifecycleBoard extends Component {

  componentDidMount() {
    this.props.fetchCards('Interested');
  }

  render() {
    console.log('Fetched cards from lifecycleBoard!', this.props.fetched);

    return (
      <div>
        <Grid>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Interested</h2>
            </Paper>
            <br />
            <InterestList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Applied</h2>
            </Paper>
            <br />
            <AppliedList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Interview Scheduled</h2>
            </Paper>
            <br />
            <InterviewList />
          </Col>
          <Col xs={6} sm={3}>
            <Paper style={style} zDepth={4}>
              <h2>Interviewed</h2>
            </Paper>
            <br />
            <PostInterviewList />
          </Col>
        </Grid>
      </div>
    );
  }
}

/* REDUX: everytime the application state changes, the container will re-render and update the props */

const mapStateToProps = (state) => {
  // whatever is returned will show up as props inside of InterestList
  return {
    hasErrored: state.cardsHasErrored,
    fetched: state.cardsAreFetched
  };
};

// dispatch connects to actions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (status) => dispatch(fetchCards(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LifecycleBoard);