import React, { useState, useEffect } from "react";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/step-three")
  }
const variants=[
  {
    variantId:"variant-1",
    variantText:"Frontend"
  },
  {
    variantId:"variant-2",
    variantText:"Python"
  },
  {
    variantId:"variant-3",
    variantText:"UX/UI"
  },
  {
    variantId:"variant-4",
    variantText:"Data-аналитик"
  }
]

  const [courseVariant, setCourseVariant] = useState(null);
  const [buttonError, setbuttonError] = useState(true)

  useEffect(()=>{
    if(courseVariant === null) {
      localStorage.setItem("course","")
      setbuttonError(true)
    } else {
      localStorage.setItem("course",JSON.stringify(courseVariant))
      setbuttonError(false)
    }
  },[courseVariant])


  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2}/>
          <div className="question">
            <Header headerText="На какой курс вы запишитесь?"/>
            <ul className="variants">
              {variants.map((elem, i) => (
                <AnswerItem
                answerText={elem.variantText}
                id={elem.variantId}
                key={elem.variantId}
                answerChange = {() => setCourseVariant(elem.variantText)}
                />
              ))}
            </ul>
            <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
