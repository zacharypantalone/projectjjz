import React from 'react';

export const CareerButton = props => {
  return (
    <button
      className='main-button'
      onClick={() => props.handleClick(props.result.id)}
    >
      {props.result.title}
    </button>
  );
};
