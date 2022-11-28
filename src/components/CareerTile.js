// import React, { useEffect, useState } from 'react';
// import { careerList } from '../careerList';

// // import './styles/CareerTile.scss';

// export default function careerTile(props) {
  
//   return (
//     <div>
//       <h3>image here</h3>
//       {props.img}
//       <h3>Job title here</h3>
//       {props.body}
//       <h3>blah blah blah this is all about the job stated above</h3>
//     {/* button below lins to Careers view which renders careerInfo component with extended info */}
//       <button>Click here for more into</button>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/CareerTile.scss';


export default function Dashboard() {
  //Quiz results would give you the Career ex. tech
  const [quizResults, setQuizResults] = useState();
  //Job would give you the jobs that fall within the Career category ex. creative coding, web dev
  const [jobs, setJobs] = useState([
    { job1: '' },
    { job2: '' },
    { job3: '' }
  ]);


  // const handleLogoutClick = (event) => {
  //   event.preventDefault()
  // }

  useEffect(() => {
    const currentUser = 1
    axios.get(`/quizresults?userId=${currentUser}`)
      .then(res => {
        console.log(res)
        setJobs(
          [
            { job1: res.data[0].recommendation_1 },
            // { title: res.data[0].title}
            { job2: res.data[0].recommendation_2 },
            { job3: res.data[0].recommendation_3 },
          ])
      }).then(console.log(jobs))
  }, []);


  return (
    <article className='career-tiles'>
    <div className='career-tile'>
      {jobs.map(job =>
        <p>{job.job1}</p>
        )}
    <button>Click here for more info!</button>
    </div>
    <div className='career-tile'>
      {jobs.map(job =>
        <p>{job.job2}</p>
        )}
    <button>Click here for more info!</button>
    </div>
    <div className='career-tile'>
      {jobs.map(job =>
        <p>{job.job1}</p>
        )}
    <button>Click here for more info!</button>
    </div>
    </article>
  )
}