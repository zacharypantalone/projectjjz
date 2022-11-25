import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CareerInfo from '../components/CareerInfo';
import { careerList } from '../careerList';

// Full info on a singular job will render here 
export default function Career() {
  const careerProfile = careerList[0];
  return (
    <div id='careerinfo-page'>
      <CareerInfo career={careerProfile}/> 
    </div>
  );
}
