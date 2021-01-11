import { DELETE_SURVEY, RESET_ACTION, RESET_LOAD} from '../actions/types';

export default function(state = {msg: '', action:'', display: false,reload:false}, action) {
  switch (action.type) {
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
