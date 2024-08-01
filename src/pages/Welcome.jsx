import React, { useState, useEffect } from "react"
import { Header } from "../components/Header.jsx"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton.jsx";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonError, setbuttonError] = useState(true)

  useEffect(()=>{
    if(name && phone) {
      setbuttonError(false)
    }
  },[name,phone])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Добро пожаловать в квиз"/>
          <form className="welcome__form">
            <AppInput 
              inputText = "Ваше имя"
              errorText = "Введите ваше имя в правильном формате"
              inputPlaceHolder = "Введите ваше имя"
              inputType = "text"
              inputValue= {name}
              inputChange = {setName}/>
            <AppInput 
              inputText = "Ваш номер"
              errorText = "Введите ваш номер в правильном формате"
              inputPlaceHolder = "Введите ваш номер"
              inputType = "tel"
              inputValue= {phone}
              inputChange = {setPhone}/>
            <Link to = "/step-one">
              <AppButton isDisabled={buttonError}/>
            </Link>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
