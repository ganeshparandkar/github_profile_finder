import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import '../../myCss/mycss.css';
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...' className='mySpinner' />
    </Fragment>
  );
};

export default Spinner;
