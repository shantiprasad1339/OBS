import React, { useState } from "react";
import "./customer.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Customer() {
  const [customer_name, setCustomer_Name] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [account_no, setAccount_no] = useState("");
  const [bankID, setBankID] = useState("");

  const navigate = useNavigate();

  function handleCustomer(e) {
    e.preventDefault();
    console.log(customer_name, gender, age, address, account_no, bankID);
    const url = "http://localhost:3001/customer/add"
axios.post(url,{
  "CustomerName":customer_name,
  "Gender":gender,
  "Age":age,
  "FullAddress":address,
  "AccountNo":account_no,
  "BankID":bankID
}).then((res)=>{
  console.log(res);
  navigate("/customerData");
})
  }

  return (
    <>
      <nav class="nav">
        <img
          src="src/HomePage/img/banking-logo.png"
          alt="Bankist logo"
          class="nav__logo"
          id="logo"
          designer="Jonas"
          data-version-number="3.0"
        />

        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" href="/home">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="/customer">
              Customers
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="/transferMoneyData">
              Money Handler
            </a>
          </li>
        </ul>
      </nav>

      <div class="container">
        <p class="display-1 container">Customer Add</p>

        <div className="d-flex justify-content-end">
          {/* <Link to='/customerAdd'> <button className='bg-danger fs-3 p-1'>Back</button> </Link> */}

          <Link to="/customerData">
            <button className="bg-primary fs-3 p-1">Customer Data</button>
          </Link>
        </div>

        <form class="row" id="add-transfer" onSubmit={handleCustomer}>
          <div class="col-md-6 mt-5">
            <input
              type="text"
              class="form-control fs-2"
              required="true"
              name="customer name"
              placeholder="Customer Name"
              aria-label="customer name"
              value={customer_name}
              onChange={(e) => {
                setCustomer_Name(e.target.value);
              }}
            />
          </div>

          <div class="col-md-6 mt-5">
            <input
              type="text"
              required="true"

              class="form-control fs-2"
              name="sender"
              placeholder="Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>

          <div class="col-md-6 mt-5">
            <input
              type="number"
              class="form-control fs-2"
              required="true"

              name="amount"
              placeholder="Age"
              aria-label="Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div class="col-md-6 mt-5">
            <input
              type="text"
              class="form-control fs-2"
              required="true"

              name="amount"
              placeholder="Full Address"
              aria-label="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div class="col-md-6 mt-5">
            <input
              type="number"
              class="form-control fs-2"
              required="true"


              name="account"
              placeholder="Account No."
              aria-label="Sender Bank ID"
              value={account_no}
              onChange={(e) => {
                setAccount_no(e.target.value);
              }}
            />
          </div>

          <div class="col-md-6 mt-5">
            <input
              type="text"
              required="true"

              class="form-control fs-2"
              name="receiver"
              placeholder="Bank ID"
              aria-label=" Bank ID"
              value={bankID}
              onChange={(e) => {
                setBankID(e.target.value);
              }}
            />
          </div>

          <div class="col mt-5">
            <button
              type="submit"
              class="rounded-pill movements__type movements__type--deposit fs-2"
              style={{ textAlign: "center" }}
            >
              Add Customer
            </button>
          </div>
        </form>

        <ul class="customers list-unstyled"></ul>
      </div>
    </>
  );
}

export default Customer;
