import axios from 'axios';

// These functions are Action Creators that each return an Action object with two properties:
// 1. type property: always uppercase string
// 2. payload property (describes the conditions of the action being triggered)

// Note: the value you use for type and the name of the other property that is returned is important, because you will re-use them in your reducers


// fetchCardsSuccess will be called when the data has been successfully fetched.
export const fetchCardsSuccess = (interested, applied, interviewScheduled, interviewed) => {
  return {

    type: 'FETCH_CARDS_SUCCESS',
    //We'll return an object with properties for each of our status lists (ES6 property value shorthand)
    interested,
    applied,
    interviewScheduled,
    interviewed
  };
};

// wordier method:

// export const fetchCardsSuccess = (interested, applied, interviewScheduled, interviewed) => {
//   return function(dispatch) {
//     dispatch({
//       type: 'UPDATE_INTERESTED_LIST',
//       interested
//     });
//     dispatch({
//       type: 'UPDATE_APPLIED_LIST',
//       applied
//     });
//     dispatch({
//       type: 'UPDATE_INTERVIEW_SCHEDULED_LIST',
//       interviewScheduled
//     });
//     dispatch({
//       type: 'UPDATE_INTERVIEWED_LIST',
//       interviewed
//     });
//   };
// };

export const cardsAreFetched = (bool) => {
  return {
    type: 'CARDS_ARE_FETCHED',
    fetched: bool
  };
};

export const cardsHasErrored = (bool) => {
  return {
    type: 'CARDS_HAS_ERRORED',
    hasErrored: bool
  };
};


// This action creator is the only one we need to import because it handles dispatching the other action creators

// dispatch(action): this is the only way to trigger a state change. The return value will be considered the next state

export const fetchCards = (status) => {
  console.log('sstatus from ACTION CREATOR', status);
  return (dispatch) => {
    dispatch(cardsAreFetched(true));

    axios.get('/card')
      .then(response => {
        console.log('Axios response.data', response.data);

        let interested = [];
        let applied = [];
        let interviewScheduled = [];
        let interviewed = [];

        // TODO: refactor so the filtering happens in fetchCardsSuccess action creator
        response.data.forEach(jobCard => {
          let status = jobCard.currentStatus;

          status === 'Interested' ? interested.push(jobCard) :
            status === 'Applied' ? applied.push(jobCard) :
              status === 'Interview Scheduled' ? interviewScheduled.push(jobCard) :
                status === 'Interviewed' ? interviewed.push(jobCard) : jobCard;
        });

        console.log('interestedArr from actions.index', interested);

        dispatch(fetchCardsSuccess(interested, applied, interviewScheduled, interviewed));
      })
      .catch(error => {
        console.log('uh-oh fetchCards error', error);

        dispatch(cardsHasErrored(true));
      });
  };
};

export const selectJobCard = (jobCard) => {
  return {
    type: 'JOBCARD_SELECTED',
    payload: jobCard
  };
};
