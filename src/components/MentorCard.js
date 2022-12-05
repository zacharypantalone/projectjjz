import React from 'react';

export const MentorTile = props => {
  return (
    <section className='mentor-tile'>
      <img
        className='mentor-headshot'
        src={props.result.headshot}
      />
      <p>{props.result.blurb}</p>
      <button
        className='main-button'
        onClick={() =>
          props.handleClick(props.result.id, props.result.first_name)
        }
      >
        Book a chat with {props.result.first_name}
      </button>
    </section>
  );
};