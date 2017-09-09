import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import JobCard from './JobCard.jsx';
import { fetchCards } from '../actions/index.js';

class InterestList extends Component {

  componentDidMount() {
    this.props.fetchCards('Interested');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Oops! Error loading job cards</p>;
    }

    console.log('jobs from REDUX', this.props.interestJobs);

    return (
      <div>
        {this.props.interestJobs.map((job, i) => (
          <JobCard key={i} job={job}/>
        ))}
      </div>
    );
  }
}


/*REDUX: everytime the application state changes, the container/InterestList will re-render and update the props*/

const mapStateToProps = (state) => {
  // whatever is returned will show up as props inside of InterestList
  return {
    interestJobs: state.cards,
    hasErrored: state.cardsHasErrored,
    fetched: state.cardsAreFetched
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (status) => dispatch(fetchCards(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestList);

// export default InterestList;