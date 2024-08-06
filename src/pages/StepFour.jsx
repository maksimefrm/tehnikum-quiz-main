import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerScore } from "../components/AnswerScore";
import { Header } from "../components/Header";

const StepFour = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/thanks")
  }

  const variants = [
    {
      variantId:"variant-1",
      variantText:"1",
    },
    {
      variantId:"variant-2",
      variantText:"2",
    },
    {
      variantId:"variant-3",
      variantText:"3",
    },
    {
      variantId:"variant-4",
      variantText:"4",
    },
    {
      variantId:"variant-5",
      variantText:"5",
    },
  ]

  const [variantScore, setVariantScore] = useState(null)
  const [buttonError, setbuttonError] = useState(true)

  useEffect(()=> {
    if(variantScore === null) {
      localStorage.setItem("Score", "")
      setbuttonError(true)
    } else {
      localStorage.setItem("Score", JSON.stringify(variantScore))
      setbuttonError(false)
    }
  },[variantScore])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={4}/>
          <div className="question">
            <Header headerText="С какой вероятностью вы посетите курс"/>
            <ul className="level-variants">
            {variants.map((elem, i) => (
                <AnswerScore
                  key={elem.variantId}
                  answerId={elem.variantId}
                  answerScore={elem.variantText}
                  answerChange={()=>setVariantScore(elem.variantText)}/>
              ))}
            </ul>
            <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
