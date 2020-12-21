import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
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
      const chartDataProcessed = renderChartData(survey);
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
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
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);