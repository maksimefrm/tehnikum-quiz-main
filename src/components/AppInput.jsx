import React from "react";

export const AppInput =({
  inputText,
  errorText,
  inputPlaceHolder,
  inputType,
  inputValue,
  inputChange,
  hasError
})=> {
    return(
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor="username">
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
              {hasError && <span id="error-message">{errorText}</span>}
            </label>
    )
}