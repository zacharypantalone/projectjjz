import React from 'react';
import axios from 'axios';

export const MentorTile = (props) => {
  return (
    <section
      key={props.result.id}
      className='mentor-tile'
    >
      <img
        className='mentor-headshot'
        src={props.result.headshot}
      />
      <p>{props.result.blurb}</p>
      <button
        className='main-button'
        onClick={() => props.mentorClick(props.result.id, props.result.first_name)}
      >
        Book a chat with {props.result.first_name}
      </button>
    </section>
  );
}