import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component {
  componenDidMount(){
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card darken-1">
          <div className="card-title" key={survey._id}>
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      )
    });
  }

  render(){
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys : state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys} )(SurveyList);