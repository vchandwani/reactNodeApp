import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY, RESET_ACTION, RESET_LOAD } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteSurvey = id => async dispatch => {
  const res = await axios.delete('/api/surveys',{data: {id}});
  dispatch({ type: DELETE_SURVEY, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const resetAction = () => async dispatch => {
  dispatch({ type: RESET_ACTION, payload:{msg:'',display:false,action:'',reload:false,_id:''} });
};

export const resetLoad = () => async dispatch => {
  dispatch({ type: RESET_LOAD, payload:{reload:false} });
};