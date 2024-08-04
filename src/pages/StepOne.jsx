import React, { useState, useEffect } from "react"
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";


const StepOne = () => {

  const [answer, setAnswer] = useState("");

  const [answerError,setAnswerError] = useState(false)

  const regex = /^[A-Za-zА-Яа-яЁё]+$/

  const navigate = useNavigate()
  const [buttonError, setbuttonError] = useState(true)

  const handleClick = () => {
    if(!regex.test(answer)) {
      setAnswerError(true)
    } else {
      setAnswerError(false)
      navigate("/step-two")
    }
  }

  useEffect(() => {
    if(answer.length > 0) {
      setbuttonError(false)
    } else {
      setbuttonError(true)
    }
  }, [answer])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={0}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
            <AppInput 
              required
              errorText = "Введите ваш ответ в правильном формате"
              inputPlaceHolder = "Ваш ответ"
              inputType = "text"
              inputValue= {answer}
              inputChange = {setAnswer}
              hasError={answerError}/>
            </label>
            <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
