import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SurveyList  from './surveys/SurveyList';
import MessageNotification  from './surveys/MessageNotification';
import { resetAction } from '../actions';

class Dashboard extends Component {

  render(){
    return (
      <div>
        <MessageNotification />
        <SurveyList />
        <div className="fixed-action-btn" onClick={()=>this.props.resetAction()}>
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ surveys, auth, action }) {
  return { surveys, auth, action };
}

export default connect(mapStateToProps, { resetAction })(Dashboard);