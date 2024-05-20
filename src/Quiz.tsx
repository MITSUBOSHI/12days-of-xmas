import { useState, useMemo } from "react";
import { Days } from "./Days";
import CorrectSVG from './assets/correct.svg';
import IncorrectSVG from './assets/incorrect.svg';
import './Quiz.css';

type QuizResultType = {
  correctCount: number,
  answeredCount: number
};
type ChoiceType = {
  dayNumber: number;
  correct: boolean;
};
type QuickResultType = null | 'correct' | 'incorrect';

const shuffleArray = (arr: number[]) => arr.sort(() => Math.random() - Math.random());
const dayNumbers = Days.map((d) => d.dayNumber);
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
  const [remainingDayNumbers, setRemainingDayNumbers] = useState(shuffleArray(dayNumbers));
  const [showQuickResult, setShowQuickResult] = useState<QuickResultType>(null);
  const [quizResult, setQuizResult] = useState<QuizResultType>({correctCount: 0, answeredCount: 0});

  const currentDayNumber = useMemo(() => remainingDayNumbers[0], [remainingDayNumbers]);
  const currentDay = Days.find((d) => d.dayNumber === currentDayNumber);
  const currentChoices = useMemo(() => choices(currentDayNumber, dayNumbers), [currentDayNumber]);
  const quickResultIcon = (type: 'correct' | 'incorrect'): string => {
    switch (type) {
      case 'correct':
        return CorrectSVG;
      case 'incorrect':
        return IncorrectSVG;
    }
  };

  return (
    <>
      {currentDay ? 
        <div className="quiz-container">
          <div className="question">Choose the appropriate day for the drawing.</div>
          {showQuickResult && 
            <div className="quick-result">
              <img className="quick-result-icon" src={quickResultIcon(showQuickResult)} />
            </div>
          }
          <img className="quiz-image" src={currentDay.image}/>
          <div className="choices">
            {currentChoices.map((choice, index) => (
              <button
                key={index}
                onClick={() => {
                  if (choice.correct) {
                    setQuizResult((r) => ({ correctCount: r.correctCount + 1, answeredCount: r.answeredCount + 1 }));
                    setShowQuickResult('correct');
                  } else {
                    setQuizResult((r) => ({ ...r, answeredCount: r.answeredCount + 1 }));
                    setShowQuickResult('incorrect');
                  }
                  setTimeout(() => {
                    setShowQuickResult(null);
                    setRemainingDayNumbers((numbers) => numbers.filter((n) => n !== currentDay.dayNumber));
                  }, 1000);
                }}
              >
                Day {choice.dayNumber}
              </button>
            ))}
          </div>
        </div>
      :
        <div className="quiz-result">
          <div className="score">Score: {quizResult.correctCount}/{quizResult.answeredCount}</div>
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