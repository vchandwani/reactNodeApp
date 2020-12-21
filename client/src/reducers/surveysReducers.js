import { FETCH_SURVEYS, FETCH_USER } from '../actions/types';


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_SURVEYS : 
      return action.payload;
    default:
        return state;
  }
}