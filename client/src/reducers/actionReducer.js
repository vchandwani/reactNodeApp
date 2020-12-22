import { DELETE_SURVEY } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case DELETE_SURVEY:
      return action.payload;
    default:
      return state;
  }
}
