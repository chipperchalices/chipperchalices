//Note: each reducer is named after the resulting store's state property, with the action.type not necessarily needing to correspond. Each reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer.

export const cards = (
  state = {
    interested: [],
    applied: [],
    interviewScheduled: [],
    interviewed: []
  },
  action) => {
  switch (action.type) {

  case 'FETCH_CARDS_SUCCESS':
    return Object.assign({}, state, {
      interested: action.interested,
      applied: action.applied,
      interviewScheduled: action.interviewScheduled,
      interviewed: action.interviewed
    });

  case 'UPDATE_INTERESTED_LIST':
    return action.interested;

  case 'UPDATE_APPLIED_LIST':
    return action.applied;

  case 'UPDATE_INTERVIEW_SCHEDULED_LIST':
    return action.interviewScheduled;

  case 'UPDATE_INTERVIEWED_LIST':
    return action.interviewed;

  default:
    return state;
  }
};

export const cardsHasErrored = (state = false, action) => {
  switch (action.type) {
  case 'CARDS_HAS_ERRORED':
    return action.hasErrored;

  default:
    return state;
  }
};

export const cardsAreFetched = (state = false, action) => {
  switch (action.type) {
  case 'CARDS_ARE_FETCHED':
    return action.fetched;

  default:
    return state;
  }
};