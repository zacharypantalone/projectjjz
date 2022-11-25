import React, { useEffect, useState } from 'react';
import { careerList } from '../careerList';

export default function careerTile(props) {
  // const [tile, setTile] = useState()
  return (
    <div>
      <h3>image here</h3>
      {props.img}
      <h3>Job title here</h3>
      {props.body}
      <h3>blah blah blah this is all about the job stated above</h3>
    {/* button below lins to Careers view which renders careerInfo component with extended info */}
      <button>Click here for more into</button>
    </div>
  )
}