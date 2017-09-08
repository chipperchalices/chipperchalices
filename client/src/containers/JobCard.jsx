import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class JobCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  render() {
    const job = this.props.job;
    console.log('job/companyName from within JOBCARD:', job.company.name);

    return (
      <Card className='job-card' expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={job.company.name}
          subtitle={job.position}
          avatar={job.company.logoUrl}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={job.company.name} subtitle={job.company.location} expandable={true} />
        <CardText expandable={true}>
          {job.company.description}
          <br/>
          <a href={job.applicationUrl}>Job Description</a>
        </CardText>
      </Card>
    );
  }
}

export default JobCard;