import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import JobCard from './JobCard.jsx';

class AppliedList extends Component {

  render() {
    return (
      <div>
        {this.props.appliedJobs.map((job, i) => (
          <JobCard key={i} job={job}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appliedJobs: state.cards.applied
  };
};

export default connect(mapStateToProps)(AppliedList);