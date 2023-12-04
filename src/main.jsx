import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage.jsx'
import Login from './LoginPage/Login.jsx';
import Signup from './SignupPage/Signup.jsx';
import TranfserMoney from './TranferMoney/TransferMoney.jsx';
import Customer from './Customer/Customer.jsx';
import TransferMoneyData from './TranferMoney/TransferMoneyData.jsx';
import CustomerData from './Customer/CustomerData.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/transferMoney' element={<TranfserMoney />} />
        <Route path='/transferMoneyData' element={<TransferMoneyData />} />
        <Route path='/customerAdd' element={<Customer />} />
        <Route path='/customerData' element={<CustomerData />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
