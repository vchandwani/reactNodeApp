import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {FIELDS} from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


//history passed via withRouter
const SurveyReview = ({onCancel, formValues, submitSurvey, history, credits}) => {
  
  const reviewFields =_.map(FIELDS, ({label,name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  }); 

  return (
    <div>
      <h5>Please review your values</h5>
      <div>    
        {reviewFields}
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button disabled={credits < 1} className="green btn-flat white-text right" onClick={() => submitSurvey(formValues, history)} >
        Send SurveyReview
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state){ 
  return {formValues : state.form.surveyForm.values, credits: state.auth.credits};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));