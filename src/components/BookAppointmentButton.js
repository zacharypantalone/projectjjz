import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/BookAppointment.scss';

const BookAppointmentButton = () => {
  const navigate = useNavigate();

  return (
    <div className='book-appointment-component'>
      <h4>Speak with a professional in this field!</h4>
      <button onClick={() => navigate('/schedule')}>Click here to book an appointment!</button>
    </div>
  )
}

export default BookAppointmentButton