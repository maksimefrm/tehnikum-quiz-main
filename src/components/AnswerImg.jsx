import React from "react";

export const AnswerImg = ({answerId, answerImg, answerText, answerAlt, answerChange}) => {
    return(
        <li className="variant-wrapper">
            <input 
                required 
                type="radio" 
                name="variant" 
                id={answerId} 
                onChange={answerChange}
            />
            <label htmlFor={answerId}>
                <img src={answerImg} alt={answerAlt} />
                <p>{answerText}</p>
            </label>
        </li>
    )
}