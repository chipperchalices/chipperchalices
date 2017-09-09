import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import JobCard from './JobCard.jsx';

class InterestList extends Component {

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
    interestJobs: state.cards.interested,
    hasErrored: state.cardsHasErrored
  };
};

export default connect(mapStateToProps)(InterestList);
