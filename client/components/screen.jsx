import React from 'react';
import ScreenRow from './screenRow';
import PropTypes from 'prop-types';

const Screen = (props) => {
   return (
      <div className="screen row">
         {/* <ScreenRow className="input-screen" value={props.question}/>
         <ScreenRow className="output-screen" value={props.answer}/> */}
      </div>
   );
}

Screen.propTypes = {
   question: PropTypes.string.isRequired,
   answer: PropTypes.string.isRequired
}

export default Screen;