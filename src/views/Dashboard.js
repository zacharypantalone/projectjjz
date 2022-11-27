import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { careerList } from '../careerList';



export default function Dashboard() {
  //Quiz results would give you the Career ex. tech
  const [quizResults, setQuizResults] = useState();
  //Job would give you the jobs that fall within the Career category ex. creative coding, web dev
  const [jobs, setJobs] = useState([
    { job1: '' },
    { job2: '' },
    { job3: '' }
  ]);


  const handleLogoutClick = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    const currentUser = 1
    axios.get(`/quizresults?userId=${currentUser}`)
      .then(res => {
        console.log(res)
        setJobs(
          [
            { job: res.data[0].recommendation_1 },
            // { title: res.data[0].title}
            { job: res.data[0].recommendation_2 },
            { job: res.data[0].recommendation_3 },
          ])
      }).then(console.log(jobs))
  }, []);


  return (


    <div>
      {jobs.map(job =>
        <p>{job.job}</p>
  // <CareerTile
        //   key={job.id}
        //   img={job.img}
        //   title={job.title}
        //   body={job.body}
        // />
        )}
    </div>

  )
}

