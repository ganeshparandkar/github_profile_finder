import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <span className='icon'>
          <FaInfoCircle></FaInfoCircle>
        </span>
        <span className='message'>
          {`    `}
          {alert.msg}
        </span>
      </div>
    )
  );
};

export default Alert;
