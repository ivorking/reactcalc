import React from 'react';
import PropTypes from 'prop-types';

const ScreenRow = (props) => {
   return (
      <div className="row">
         <input className={`${props.className} col-xs-12`} type="text" readOnly value={props.value}/>
      </div>
   )
}

ScreenRow.propTypes = {
   value: PropTypes.string.isRequired,
   className: PropTypes.string
}

export default ScreenRow;