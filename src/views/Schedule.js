import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/schedule.scss';
import backgroundImage from '../assets/background-image.jpg';

export default function Schedule() {
  // const [state, setState] = useState({
  //   days: {
  //     monday: {
  //       id: '',
  //       times: {
  //         id: '',
  //         '9am': {
  //           appointment: {
  //             mentorId: '',
  //             userId: '',
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  const [quizResults, setquizResults] = useState({});
  const [mentors, setMentors] = useState({});
  const [filteredMentors, setfilteredMentors] = useState({});
  const [currentMentor, setcurrentMentor] = useState({});
  const [day, setDay] = useState([]);
  const [currentDay, setcurrentDay] = useState([]);
  const [time, setTime] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    document.body.classList.add('schedule');

    Promise.all([
      axios.get('/quizresults'),
      axios.get('/mentors'),
      axios.get('/days'),
      axios.get('/times'),
    ]).then(all => {
      setquizResults(all[0].data);
      setMentors(all[1].data);
      setDay(all[2].data);
      setTime(all[3].data);
    });
    return () => document.body.classList.remove('schedule');
  }, []);

  const careerClick = id => {
    const filteredMentors = mentors.filter(x => {
      return x.job_id === id;
    });
    setfilteredMentors(filteredMentors);
    setcurrentMentor({});
  };

  const mentorClick = (id, name) => {
    setcurrentMentor({ id, name });
    axios.get('/appointments', { params: { id } }).then(res => {
      setAppointments(res.data);
    });
  };

  const dayClick = id => {
    setcurrentDay(id);
  };

  const handleBooking = (time, id) => {
    if (
      window.confirm(
        `Please confirm you would like to book an appointment with ${currentMentor.name} at ${time}`,
      )
    ) {
      axios.post('/appointments', [currentMentor, currentDay, id]).then(res => {
        console.log(res.data);
        setAppointments([...appointments, res.data.Data]);
      });
    }
  };

  // console.log(currentDay);
  console.log('appointments', appointments);
  // console.log('times', time);
  // console.log('current Mentor', currentMentor);
  // console.log('filtered Mentors', filteredMentors);

  return (
    <div id='schedule'>
      <h1>Schedule</h1>
      <img
        className='background-image'
        src={backgroundImage}
        alt='background'
      />
      <section className='career-recommendations'>
        <h3>Select a career to see which mentors are available to chat with</h3>
        <section className='career-buttons'>
          {quizResults.length > 0 ? (
            quizResults.map(result => {
              return (
                <button
                  key={result.title}
                  className='main-button'
                  onClick={() => careerClick(result.id)}
                >
                  {result.title}
                </button>
              );
            })
          ) : (
            <p>No Quiz Results found</p>
          )}
        </section>
        <section className='mentor-list'>
          {filteredMentors.length > 0
            ? filteredMentors.map(result => {
                return (
                  <section
                    key={result.id}
                    className='mentor-tile'
                  >
                    <img
                      className='mentor-headshot'
                      src={result.headshot}
                    />
                    <p>{result.blurb}</p>
                    <button
                      className='main-button'
                      onClick={() => mentorClick(result.id, result.first_name)}
                    >
                      Book a chat with {result.first_name}
                    </button>
                  </section>
                );
              })
            : ''}
        </section>
      </section>
      {!filteredMentors.length > 0 ? (
        ''
      ) : (
        <section id='schedule-tile'>
          {!currentMentor.name ? (
            <h3>Select a Mentor to see their Availability</h3>
          ) : (
            <section className='day-and-time'>
              <section className='day-tiles'>
                {day.map(x => {
                  return (
                    <button
                      key={x.id}
                      onClick={() => {
                        dayClick(x.id);
                      }}
                      className='day-tile secondary-button'
                    >
                      {x.day}
                    </button>
                  );
                })}
              </section>
              <section className='time-tiles'>
                {time.map(t => {
                  if (appointments.some(a => a.time_id === t.id)) {
                    return (
                      <section
                        className='time-tile-full'
                        key={t.time}
                      >
                        <section className='time-marker'>{t.time}</section>
                        <h3 className='h3-timeslot-booked'>Timeslot Booked</h3>
                      </section>
                    );
                  } else {
                    return (
                      <section
                        className='time-tile-available'
                        key={t.time}
                      >
                        <section className='time-marker'>{t.time}</section>
                        <h3 className='h3-timeslot'>Timeslot Available</h3>
                        <div className='timeslot-button-div'>
                          <button onClick={() => handleBooking(t.time, t.id)}>
                            Book
                          </button>
                        </div>
                      </section>
                    );
                  }
                })}
              </section>
            </section>
          )}
        </section>
      )}
    </div>
  );
}
