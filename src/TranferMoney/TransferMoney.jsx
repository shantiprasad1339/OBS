import React, { useState } from 'react';
import './transferMoney.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
function TranfserMoney() {

    const[bank_name, setBank_Name] = useState('');
    const[customer_name, setCustomer_Name] = useState('');
    const[account_no, setAccount_no] = useState('');
    const[sender, setSender] = useState('');
    const[receiver, setReceiver] = useState('');
    const[ifsc_code, setIfsc_Code] = useState('');
    const[amount, setAmount] = useState('');

    const navigate = useNavigate()

    function handleTransfer(e){
        e.preventDefault();
        console.log(sender, receiver, amount)
        const url = "http://localhost:3001/money/transfer"
        axios.post(url,{
            "BankName":bank_name,
            "customerName":customer_name,
            "IFSCCODE":ifsc_code,
            "ReceiverBankID":receiver,
            "AccountNo":account_no,
            "senderBankID":sender,
            "Amount":amount
        }).then((res)=>{
            console.log(res);
            alert('Money Transfred')
            navigate('/transferMoneyData')
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
                        <a class="nav__link" href="/home">Home</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/customerData">Customers</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/transferMoneyData">Money Handler</a>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <p class="display-1">Transfer Money</p>

                <form class="row" id="add-transfer" onSubmit={handleTransfer}>

                    <div class="col-md-6 mt-5">
                        <input
                            type="text"
                            class="form-control fs-2"
                            required="true"
                            name="Bank name"
                            placeholder="Bank Name"
                            aria-label="Sender Bank ID"
                            value={bank_name}
                            onChange={(e)=>{setBank_Name(e.target.value)}}
                        />
                    </div>

                    <div class="col-md-6 mt-5">
                        <input
                            type="text"
                            class="form-control fs-2"
                            required="true"

                            name="customer name"
                            placeholder="Customer Name"
                            aria-label="Sender Bank ID"
                            value={customer_name}
                            onChange={(e)=>{setCustomer_Name(e.target.value)}}
                        />
                    </div>

                    <div class="col-md-6 mt-5">
                        <input
                            type="number"
                            class="form-control fs-2"
                            required="true"

                            name="avvount"
                            placeholder="Account No."
                            aria-label="Sender Bank ID"
                            value={account_no}
                            onChange={(e)=>{setAccount_no(e.target.value)}}
                        />
                    </div>

                    <div class="col-md-6 mt-5">
                        <input
                            type="text"
                            class="form-control fs-2"
                            required="true"

                            name="sender"
                            placeholder="Sender Bank ID"
                            aria-label="Sender Bank ID"
                            value={sender}
                            onChange={(e)=>{setSender(e.target.value)}}
                        />
                    </div>
                    
                    <div class="col-md-6 mt-5">
                        <input
                            type="text"
                            class="form-control fs-2"
                            required="true"

                            name="receiver"
                            placeholder="Receiver Bank ID"
                            aria-label="Receiver Bank ID"
                            value={receiver}
                            onChange={(e)=>{setReceiver(e.target.value)}}
                        />
                    </div>

                    <div class="col-md-6 mt-5">
                        <input
                            type="text"
                            class="form-control fs-2"
                            required="true"

                            name="IFSC CODE"
                            placeholder="IFSC CODE"
                            aria-label="Sender Bank ID"
                            value={ifsc_code}
                            onChange={(e)=>{setIfsc_Code(e.target.value)}}
                        />
                    </div>

                    <div class="col-md-6 mt-5">
                        <input
                            type="number"
                            class="form-control fs-2"
                            required="true"

                            name="amount"
                            placeholder="Amount"
                            aria-label="Amount"
                            value={amount}
                            onChange={(e)=>{setAmount(e.target.value)}}
                        />
                    </div>

                    <div class="col mt-5"></div>

                    <div class="col mt-5">
                        <button
                            type="submit"
                            class="rounded-pill movements__type movements__type--deposit fs-2"
                            style={{textAlign: "center"}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-coin"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                                />
                            </svg>
                            Pay
                        </button>
                    </div>
                </form>
                <br />


                <ul class="transfers list-unstyled"></ul>
            </div>


            <div
                aria-live="polite"
                aria-atomic="true"
                class="d-flex justify-content-center align-items-center w-100"
            >
                <div
                    class="toast align-items-center text-white bg-primary border-0"
                    id="liveToast"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div class="d-flex">
                        <div class="toast-body">Transaction Succesful</div>
                        <button
                            type="button"
                            class="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TranfserMoney;