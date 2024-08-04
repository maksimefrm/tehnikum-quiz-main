import React from "react";

export const AnswerItem = ({id,answerText}) => {
    return(
        <li className="variant-wrapper">
            <input required type="radio" name={id} id={id} />
            <label htmlFor={id}>{answerText}</label>
        </li>
    )
}