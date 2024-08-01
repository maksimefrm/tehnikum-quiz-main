import React from "react";

export const AppInput =({
  inputText,
  errorText,
  inputPlaceHolder,
  inputType,
  inputValue,
  inputChange})=> {
    return(
        <label className="input-wrapper" htmlFor="username">
              {inputText}
              <input
                required
                type = {inputType}
                name = "username"
                id = "username"
                placeholder = {inputPlaceHolder}
                inputType = {inputType}
                value = {inputValue}
                onChange = {(event) => inputChange(event.target.value)}
              />
              <span id="error-message">
                {errorText}
              </span>
            </label>
    )
}