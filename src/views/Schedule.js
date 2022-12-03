import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/schedule.scss';
import backgroundImage from '../assets/background-image.jpg';

export default function Schedule() {
  const [quizResults, setquizResults] = useState({});
  const [mentors, setMentors] = useState({});
  const [filteredMentors, setfilteredMentors] = useState({});
  const [currentMentor, setcurrentMentor] = useState('');
  const [day, setDay] = useState([
    { Day: 'Monday' },
    { Day: 'Tuesday' },
    { Day: 'Wednesday' },
    { Day: 'Thursday' },
    { Day: 'Friday' },
  ]);
  const [time, setTime] = useState([
    { Time: '9am' },
    { Time: '10am' },
    { Time: '11am' },
    { Time: '12pm' },
    { Time: '1pm' },
  ]);

  useEffect(() => {
    axios.get(`/quizresults`).then(res => {
      setquizResults(res.data);
    });
    axios.get(`/mentors`).then(res => {
      setMentors(res.data);
    });
  }, []);

  // console.log(quizResults);
  // console.log(mentors);

  const careerClick = id => {
    const filteredMentors = mentors.filter(x => {
      return x.job_id === id;
    });
    setfilteredMentors(filteredMentors);
  };

  const mentorClick = (id, name) => {
    console.log(name);
    setcurrentMentor(name);
  };

  const dayClick = () => {

  }

  console.log(filteredMentors);

  return (
    <div id='schedule'>
      <h1>Schedule</h1>
      <img
        className='background-image'
        src={backgroundImage}
        alt='background'
      />
      <section className='career-recommendations'>
        <h3>
          Select one of your career recommendations to see the available mentors
          to chat with
        </h3>
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
          {filteredMentors.length > 0 ? (
            filteredMentors.map(result => {
              return (
                <section className='mentor-tile'>
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
          ) : (
            <p>No Mentors Found</p>
          )}
        </section>
      </section>
      <section id='schedule-tile'>
        <h3>{currentMentor}'s Availability</h3>
        <section className='day-and-time'>
          <section className='day-tiles'>
            {day.map(x => {
              return <button 
              onClick={dayClick} className='day-tile secondary-button'>
                {x.Day}
              </button>;
            })}
          </section>
          <section className='time-tiles'>
            {time.map(x => {
              return <div className='time-tile'>{x.Time}</div>;
            })}
          </section>
        </section>
      </section>
    </div>
  );
}
