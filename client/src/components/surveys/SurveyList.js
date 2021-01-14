import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey, resetAction } from '../../actions';
import { RadialChart } from 'react-vis';

const renderChartData = (surveyData) => {
    let chartData  = [];
    if(surveyData.yes){
      chartData.push({angle : surveyData.yes, label : 'Yes'});
    }
    if(surveyData.no){
      chartData.push({angle : surveyData.no, label : 'No'});
    }
    return chartData;
}


class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      if(survey._id !== this.props.action._id) {
        const chartDataProcessed = renderChartData(survey);
    
        const confirmDelete = (id) => {
          if (window.confirm("Do you really want to delete?")) {
            this.props.deleteSurvey(id);
          }
        }
        return (
          <div className="card darken-1" key={survey._id}>
            <div className="card-content blue-grey white-text">
              <span className="card-title">
                <span className="left">{survey.title}</span>
  
                <span className="right cursor" onClick={() => confirmDelete(survey._id)}>
                  <i className="material-icons">delete</i>
                </span>
              </span>
            </div>
            <div className="card-content blue-grey white-text">
              <p>
                {survey.body}
              </p>
              <p>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              {chartDataProcessed.length > 0 ? 
                <RadialChart 
                  data={chartDataProcessed}
                  width={300}
                  height={300}
                  showLabels={true}
                />
                : 'No responses yet'
              }
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            {this.renderSurveys()}
          </div>
        </div>
      </div>
      
    );
  }
}

function mapStateToProps({ surveys, auth, action }) {
  return { surveys, auth, action };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey, resetAction })(SurveyList);