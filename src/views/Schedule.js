import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/schedule.scss';
import backgroundImage from '../assets/background-image.jpg';

import { MentorTile } from '../components/MentorCard';
import { CareerButton } from '../components/CareerButton';
import { DayButton } from '../components/DayButton';
import { TimeTile } from '../components/TimeTile';

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
  const [days, setDays] = useState([]);
  const [currentDay, setcurrentDay] = useState([]);
  const [times, setTimes] = useState([]);
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
      setDays(all[2].data);
      setTimes(all[3].data);
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
        setAppointments([...appointments, res.data.Data]);
      });
    }
  };

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
                <CareerButton
                  key={result.title}
                  result={result}
                  handleClick={careerClick}
                />
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
                  <MentorTile
                    key={result.id}
                    handleClick={mentorClick}
                    result={result}
                  />
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
                {days.map(day => {
                  return (
                    <DayButton
                      day={day}
                      handleClick={dayClick}
                    />
                  );
                })}
              </section>
              <section className='time-tiles'>
                <TimeTile
                  times={times}
                  appointments={appointments}
                  handleClick={handleBooking}
                />
              </section>
            </section>
          )}
        </section>
      )}
    </div>
  );
}
