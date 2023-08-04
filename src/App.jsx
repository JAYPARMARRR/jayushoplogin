import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css"
import Form from "./Component/Form"
import Login from "./Component/LogIn"
import { useState } from "react";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  console.log("isLoggedIn",isLoggedIn)

  const logIn  =(username,password) =>{

    if (username === "abc@jayu.com" && password === "123") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }


  }
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={!isLoggedIn  ? <Login  logIn={logIn}  /> : <Navigate to={'/form'} />} />
          <Route path="/form" element={ <Form /> } />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App