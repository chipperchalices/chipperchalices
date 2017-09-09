import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import LifecycleBoard from '../containers/LifecycleBoard.jsx';
import JobForm from '../components/jobForm.jsx';

class User extends Component {

  render() {
    return (
      <div>
        <h1>Application Lifecycle Board</h1>
        <JobForm/>
        <br/>
        <LifecycleBoard/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(User);