import React from 'react';

export const TimeTile = props => {
  return (
    props.times.map(time => {
      if (props.appointments.some(appointment => appointment.time_id === time.id)) {
        return (
          <section
            className='time-tile-full'
            key={time.time}
          >
            <section className='time-marker'>{time.time}</section>
            <h3 className='h3-timeslot-booked'>Timeslot Booked</h3>
          </section>
        );
      } else {
        return (
          <section
            className='time-tile-available'
            key={time.time}
          >
            <section className='time-marker'>{time.time}</section>
            <h3 className='h3-timeslot'>Timeslot Available</h3>
            <div className='timeslot-button-div'>
              <button onClick={() => props.handleClick(time.time, time.id)}>Book</button>
            </div>
          </section>
        );
      }
    }));
};
