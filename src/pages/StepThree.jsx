import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerImg } from "../components/AnswerImg";

const StepThree = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/step-four")
  }
  const variants = [
    {
      variantImg:"./img/laugh.png",
      variantId:"variant-1",
      variantText:"Будет весело",
      variantAlt:"laugh"
    },
    {
      variantImg:"./img/hearts.png",
      variantId:"variant-2",
      variantText:"Мне понравиться",
      variantAlt:"hearts"
    },
    {
      variantImg:"./img/smirk.png",
      variantId:"variant-3",
      variantText:"Будет круто",
      variantAlt:"smirk"
    },
    {
      variantImg:"./img/fright.png",
      variantId:"variant-4",
      variantText:"В предкушении",
      variantAlt:"fright"
    }
  ]
  const [variantImg, setVariantImg] = useState(null)
  const [buttonError, setbuttonError] = useState(true)

  useEffect(()=> {
    if(variantImg === null) {
      localStorage.setItem("Text", "")
      setbuttonError(true)
    } else {
      localStorage.setItem("Text", JSON.stringify(variantImg))
      setbuttonError(false)
    }
  },[variantImg])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={3}/>
          <div className="question">
            <Header headerText="Ваши ожидания от курса"/>
            <ul className="emoji-variants">
              {variants.map((elem, i) => (
                <AnswerImg
                key={elem.variantId}
                answerAlt={elem.variantAlt}
                answerId={elem.variantId}
                answerImg={elem.variantImg}
                answerText={elem.variantText}
                answerChange={()=>setVariantImg(elem.variantText)}
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

export default StepThree;
