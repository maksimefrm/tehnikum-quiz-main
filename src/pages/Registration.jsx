import React, { useState, useEffect } from "react"
import { Header } from "../components/Header.jsx"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton.jsx";
import { Link } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [buttonError, setbuttonError] = useState(true)
  
    useEffect(()=>{
      if(name && surname && number && email && country) {
        setbuttonError(false)
      }
    },[name,surname,number,email,country])

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
                  inputText = "Вашу фамилию"
                  errorText = "Введите вашу фамилию в правильном формате"
                  inputPlaceHolder = "Введите вашу фамилию"
                  inputType = "text"
                  inputValue= {surname}
                  inputChange = {setSurname}/>
                <AppInput 
                  inputText = "Ваш номер"
                  errorText = "Введите ваш номер в правильном формате"
                  inputPlaceHolder = "Введите ваш номер"
                  inputType = "tel"
                  inputValue= {number}
                  inputChange = {setNumber}/>
                <AppInput 
                  inputText = "Ваш email"
                  errorText = "Введите ваш email в правильном формате"
                  inputPlaceHolder = "Введите ваш email"
                  inputType = "email"
                  inputValue= {email}
                  inputChange = {setEmail}/>
                <AppInput 
                  inputText = "Ваш город/страна"
                  errorText = "Введите ваш город/страну в правильном формате"
                  inputPlaceHolder = "Введите ваш город/страну"
                  inputType = "country"
                  inputValue= {country}
                  inputChange = {setCountry}/>
                <Link to = "/welcome">
                    <AppButton isDisabled={buttonError}/>
                </Link>
              </form>
            </div>
          </div>
        </div>
      );
}


export default Registration;