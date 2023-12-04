import React, { useState , useEffect} from 'react';
import './transferMoney.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function TransferMoneyData() {

    const[sender, setSender] = useState('');
    const[receiver, setReceiver] = useState('');
    const[amount, setAmount] = useState('');

    const [data,SetData] = useState()
    const navigate = useNavigate()

useEffect(()=>{
    gettData()
},[])
function gettData(){
    axios.get('http://localhost:3001/money/transfer/get').then((res)=>{
        console.log(res.data.data);
        SetData(res.data.data)
    })}
    // navigate('/transferMoneyData')

    return (
        <>
            <nav class="nav">
            <img
                        src="/src/HomePage/img/banking-logo.png"
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
                        <a class="nav__link" href="#">Money Handler</a>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <p class="display-1">Transfer Money Data</p>

                <div className='d-flex justify-content-end'>
                {/* <Link to='/customerAdd'> <button className='bg-danger fs-3 p-1'>Back</button> </Link> */}
                   
                   <Link to='/transferMoney'><button className='bg-primary fs-3 p-1'>Add Transfer Money</button></Link> 
                </div>

                <br />
                    <table className='table table'>
                        <thead className='fw-bold fs-4'>
                            <tr>
                            <th>S.No</th>
                            <th>Customer Name</th>
                            <th>Account No.</th>
                            <th>Bank Name</th>
                            <th>Sender Bank ID</th>
                            <th>Receiver Bank ID</th>
                            <th>IFSC CODE</th>
                            <th>Amount</th>
                            <th>Status</th>
                            </tr>
                        </thead>

                        <tbody className=' fs-5'>
                           

{data && data.map((item)=>{
    return(
        
        <tr>
        <td> {item.id} </td>
        <td>{item.customerName}</td>
        <td>{item.AccountNo}</td>
        <td>{item.BankName} </td>
        <td>{item.senderBankID}</td>
        <td>{item.ReceiverBankID}</td>
        <td>{item.IFSCCODE}</td>
        <td>{item.Amount}</td>
        <td className='text-success'>Success</td>
    </tr>
        )
})}
                           

                           
                        

                        </tbody>
                    </table>

                <ul class="transfers list-unstyled"></ul>
            </div>
        </>
    );
}

export default TransferMoneyData;