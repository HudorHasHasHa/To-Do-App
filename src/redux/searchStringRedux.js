// import shortid from 'shortid';

// selectors
export const getSearchString =  ({searchString}) => searchString.value;
export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({ cards }) => cards.length;


// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createActionChange = payload => (
  { payload: payload,
    type: CHANGE }
);


// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

