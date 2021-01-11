import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { resetAction } from '../../actions';

class MessageNotification extends Component  {
  
  render(){
    return (
      this.props.action.display && 
      <div style={{margin:'10px 0', minHeight:20}} className={classNames('col s12',this.props.action.action === 'success' ? 'green' : 'orange')}>
        <span className="left">{this.props.action.msg}</span>
        <i onClick={() => this.props.resetAction()} className="right material-icons">close</i>
       </div>
    );
  }
};

function mapStateToProps({ action }) {
  return { action };
}

export default connect(mapStateToProps ,{resetAction})(MessageNotification);