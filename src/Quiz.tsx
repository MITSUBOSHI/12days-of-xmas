import { useState } from "react";
import { Days } from "./Days";
import './Quiz.css';

type QuizResultType = {
  correctCount: number,
  answeredCount: number
};
type ChoiceType = {
  dayNumber: number;
  correct: boolean;
};

const shuffleArray = (arr: number[]) => arr.sort(() => Math.random() - Math.random());
const choices = (dayNumber: number, dayNumbers: number[]) => {
  const incorrectChoices = shuffleArray(dayNumbers.filter((n) => n !== dayNumber));
  const choiceDayNumbers = shuffleArray([dayNumber, incorrectChoices[0], incorrectChoices[1]]);
  const choices = choiceDayNumbers.map((n) => {
    const correct = n === dayNumber;

    return {
      dayNumber: n,
      correct
    } as ChoiceType;
  });  

  return choices;
};
const Quiz = () => {
  const dayNumbers = Days.map((d) => d.dayNumber);
  const [remainingDayNumbers, setRemainingDayNumbers] = useState(shuffleArray(dayNumbers));
  const [quizResult, setQuizResult] = useState<QuizResultType>({correctCount: 0, answeredCount: 0});

  const currentDayNumber = remainingDayNumbers[0];
  const currentDay = Days.find((d) => d.dayNumber === currentDayNumber);

  return (
    <>
      {currentDay ? 
        <div>
          <div>Choose the appropriate day for the drawing.</div>
          <img src={currentDay.image}/>
          {choices(currentDayNumber, dayNumbers).map((choice, index) => (
            <button
              key={index}
              onClick={() => {
                if (choice.correct) {
                  setQuizResult((r) => ({ correctCount: r.correctCount + 1, answeredCount: r.answeredCount + 1 }));
                } else {
                  setQuizResult((r) => ({ ...r, answeredCount: r.answeredCount + 1 }));
                }
                setRemainingDayNumbers((numbers) => numbers.filter((n) => n !== currentDay.dayNumber));
              }}
            >
              Day {choice.dayNumber}
            </button>
          ))}
        </div>
      :
        <div>
          <div>Correct: {quizResult.correctCount}/{quizResult.answeredCount}</div>
          <button onClick={() => {
            setQuizResult({correctCount: 0, answeredCount: 0});
            setRemainingDayNumbers(shuffleArray(dayNumbers));
          }}>
            Retry
          </button>
        </div>
      }
    </>
  )
};

export default Quiz;