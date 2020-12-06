import React from 'react';
import '../../myCss/mycss.css';

const NotFound = ({ notfound }) => {
  if (notfound === true) {
    return (
      <div className='notfound'>
        <h1> 404 not Found </h1>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NotFound;
