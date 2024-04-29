import { useState } from 'react';
import { Days } from './Days';
import './Gallery.css'

const Gallery = () => {
  const [currentDayNumber, setDayNumber] = useState(1);
  const currentDay = Days.find((d) => d.dayNumber == currentDayNumber);
  const previousButtonDisabled = currentDayNumber === 1;
  const nextButtonDisabled = currentDayNumber === 12;

  if (currentDay == undefined) {
    return null;
  }

  return (
    <>
      <h1>Day {currentDay.dayNumber}</h1>
      <div className='button-container'>
        <button
          className='left'
          disabled={previousButtonDisabled}
          onClick={() => setDayNumber((n) => n - 1)}
        >
          Prev
        </button>
        <button
          className='right'
          disabled={nextButtonDisabled}
          onClick={() => setDayNumber((n) => n + 1)}
        >
          Next
        </button>
      </div>
      <div className='card'>
        <img src={currentDay.image} className='character-image' />
        <div>{currentDay.nameEn}</div>
        <div>{currentDay.nameJa}</div>
      </div>
    </>
  )
}

export default Gallery