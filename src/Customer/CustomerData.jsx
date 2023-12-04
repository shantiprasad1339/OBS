import React, { useState , useEffect} from 'react';
import './customer.css'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios';
function CustomerData() {
const [data,SetData] = useState()
useEffect(()=>{
    gettData()
},[])
function gettData(){
    axios.get('http://localhost:3001/customer/get').then((res)=>{
        console.log(res.data.data);
        SetData(res.data.data)
    })
}
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
                        <a class="nav__link" href="/transferMoneyData">Money Handler</a>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <p class="display-1">Customer Data</p>

                <div className='d-flex justify-content-end'>
                {/* <Link to='/customerAdd'> <button className='bg-danger fs-3 p-1'>Back</button> </Link> */}
                   
                   <Link to='/customerAdd'><button className='bg-primary fs-3 p-1'>Add Customer</button></Link> 
                </div>

                <br />
                    <table className='table table'>
                        <thead className='fs-3'>
                            <tr>
                            <th>S.No</th>
                            <th>Customer Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Full Address</th>
                            <th>Account No.</th>
                            <th>Bank ID</th>
                            
                            <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='fs-4'>

                          {data && data.map((item)=>{
                            return(
<tr>
                                <td> {item.id}</td>
                                <td>{item.CustomerName}</td>
                                <td>{item.Gender}</td>
                                <td>{item.Age}</td>
                                <td>{item.FullAddress}</td>
                                <td>{item.AccountNo}</td>
                                <td>{item.BankID}</td>
                                <td className='text-danger' style={{ cursor: 'pointer' }}>Delete</td>
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

export default CustomerData;