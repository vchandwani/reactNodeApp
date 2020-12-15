import React from 'react';
import { Link } from 'react-router-dom';



function palindrome(str) {

  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }

  return true;
}

const Dashboard = () => {
  return (
    <div>
      Dashboard
      {palindrome('testest')}
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;