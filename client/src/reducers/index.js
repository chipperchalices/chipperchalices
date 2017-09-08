import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsAreFetched } from './reducer_jobcards.js';
import InterestJobsReducer from './reducer_interestjobs.js';
import AppliedJobsReducer from './reducer_appliedjobs.js';
import InterviewJobsReducer from './reducer_interviewjobs.js';
import PostInterviewJobsReducer from './reducer_postinterviewjobs.js';

// any key added to the combineReducers will be added as key to the global application state

const rootReducer = combineReducers({
  //state: (state = {}) => state
  cards,
  cardsHasErrored,
  cardsAreFetched,

  interestJobs: InterestJobsReducer,
  appliedJobs: AppliedJobsReducer,
  interviewJobs: InterviewJobsReducer,
  postInterviewJobs: PostInterviewJobsReducer
});

export default rootReducer;
