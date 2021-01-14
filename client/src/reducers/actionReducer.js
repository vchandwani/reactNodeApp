import { DELETE_SURVEY, RESET_ACTION, RESET_LOAD,LOAD_CREDIT } from '../actions/types';

export default function(state = {msg: '', action:'', display: false,reload:false, _id: ''}, action) {
  switch (action.type) {
    case LOAD_CREDIT:
      return action.payload;
    case DELETE_SURVEY:
      return action.payload;
    case RESET_ACTION:
      return action.payload;
    case RESET_LOAD:
      return { ...state , reload : false};
    default:
      return state;
  }
}
