import React, { useState, useEffect } from "react"
import { Header } from "../components/Header.jsx"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton.jsx";
import { useNavigate } from "react-router-dom";

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
  
    const [nameError,setNameError] = useState(false)
    const [surnameError,setSurnameError] = useState(false)
    const [numberError,setNumberError] = useState(false)
    const [countryError,setCountryError] = useState(false)

  
    const regex = /^[A-Za-zА-Яа-яЁё]+$/
    const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/
  
    const navigate = useNavigate()
  
    const handleClick = () => {
      if(!regex.test(name,surname,country)) {
        setNameError(true)
        setSurnameError(true)
        setCountryError(true)
      } else if(!regexNum.test(number)) {
        setNumberError(true)
      } else {
        setNameError(false)
        setNumberError(false)
        setSurnameError(false)
        setCountryError(false)
        navigate("/welcome")
      }
    }
  
    useEffect(() => {
      if(name.length >0 && surname.length >0 && number.length >0 && email.length >0 && country.length >0) {
        setbuttonError(false)
      } else {
        setbuttonError(true)
      }
    }, [name,surname,number,email,country])

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
                  inputChange = {setName}
                  hasError={nameError}/>
                <AppInput 
                  inputText = "Вашу фамилию"
                  errorText = "Введите вашу фамилию в правильном формате"
                  inputPlaceHolder = "Введите вашу фамилию"
                  inputType = "text"
                  inputValue= {surname}
                  inputChange = {setSurname}
                  hasError={surnameError}/>
                <AppInput 
                  inputText = "Ваш номер"
                  errorText = "Введите ваш номер в правильном формате"
                  inputPlaceHolder = "Введите ваш номер"
                  inputType = "tel"
                  inputValue= {number}
                  inputChange = {setNumber}
                  hasError={numberError}/>
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
                  inputType = "text"
                  inputValue= {country}
                  inputChange = {setCountry}
                  hasError={countryError}/>
                <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
              </form>
            </div>
          </div>
        </div>
      );
}


export default Registration;