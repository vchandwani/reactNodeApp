import React, { useState, useEffect} from 'react';
import classNames from 'classnames';

const MessageNotification = ({actionState}) => {
  const [isOpen, setIsOpen] = useState(actionState.display?actionState.display:false);

  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(loadVehicles(apiResource));
  // }, []);

  return (
    // isOpen && (
      <div style={{margin:'10px 0'}} className={classNames('col s12 ' , actionState.action === 'success' ? 'green' : 'orange')}>
        <span className="left">{actionState.msg}</span>
        <a onClick={() => setIsOpen(false)} className="right">
          <i className="material-icons white">close</i>
        </a>
      </div>
    // )
  );
};
export default MessageNotification;