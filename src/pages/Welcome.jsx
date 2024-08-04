import React, { useState, useEffect } from "react"
import { Header } from "../components/Header.jsx"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton.jsx";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError,setNameError] = useState(false)
  const [phoneError,setPhoneError] = useState(false)

  const regex = /^[A-Za-zА-Яа-яЁё]+$/
  const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/

  const navigate = useNavigate()
  const [buttonError, setbuttonError] = useState(true)

  const handleClick = () => {
    if(!regex.test(name)) {
      setNameError(true)
    } else if(!regexNum.test(phone)) {
      setPhoneError(true)
    } else {
      setNameError(false)
      setPhoneError(false)
      navigate("/step-one")
    }
  }

  useEffect(() => {
    if(name.length >0 && phone.length >0) {
      setbuttonError(false)
    } else {
      setbuttonError(true)
    }
  }, [name,phone])

  // useEffect(()=>{
  //   if(name && phone) {
  //     setbuttonError(false)
  //   }
  // },[name,phone])

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
              inputText = "Ваш номер"
              errorText = "Введите ваш номер в правильном формате"
              inputPlaceHolder = "+998"
              inputType = "tel"
              inputValue= {phone}
              inputChange = {setPhone}
              hasError={phoneError}/>
            <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
