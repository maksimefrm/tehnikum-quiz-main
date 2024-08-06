import React from "react";

export const AnswerScore = ({answerId, answerChange, answerScore}) => {
    return(
        <li className="variant-wrapper">
            <input 
                required 
                type="radio" 
                name="variant" 
                id={answerId} 
                onChange={answerChange}
            />
            <label htmlFor={answerId}>{answerScore}</label>
        </li>
    )
}