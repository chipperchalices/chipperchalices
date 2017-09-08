import axios from 'axios';

// These functions are Action Creators that each return an Action object with two properties:
// 1. type property: always uppercase string
// 2. payload property (describes the conditions of the action being triggered)

// Note: the value you use for type and the name of the other property that is returned is important, because you will re-use them in your reducers


// fetchCardsSuccess will be called when the data has been successfully fetched, with the data passed to it as jobCards.
export const fetchCardsSuccess = (cards) => {
  return {
    type: 'FETCH_CARDS_SUCCESS',
    //We'll return an object with a property called jobs whose value will be the array of cards (ES6 property value shorthand)
    cards
  };
};

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

export const fetchCards = (status) => {
  console.log('status from ACTION CREATOR', status);
  return (dispatch) => {
    dispatch(cardsAreFetched(true));

    axios.get('/card')
      .then(response => {
        console.log('Axios response.data', response.data);

        dispatch(fetchCardsSuccess(response.data));
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
