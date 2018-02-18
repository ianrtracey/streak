import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const actionTypes = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_HABITS_SUCCESS: 'GET_HABITS_SUCCESS',
};

export const userReceived = user => ({
  type: actionTypes.GET_USER_SUCCESS,
  user,
});

export const habitsReceived = habits => ({
  type: actionTypes.GET_HABITS_SUCCESS,
  habits,
});

const initialState = {
  user: {
    name: 'no user',
  },
  habits: [],
};

const toHabitList = habitsResponse =>
  Object.keys(habitsResponse).map(habitKey => ({
    id: habitKey,
    ...habitsResponse[habitKey],
  }));

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.GET_HABITS_SUCCESS:
      return {
        ...state,
        habits: toHabitList(action.habits),
      };
    default:
      return state;
  }
};
export const initStore = (initialState = initialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
