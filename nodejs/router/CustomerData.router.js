import Express from "express";
import { customerAdd, customerupdate, getcustomer } from "../controller/CustomerData.controler.js";

const customerRouter = Express.Router()
customerRouter.post('/customer/add',customerAdd)
customerRouter.get('/customer/get',getcustomer)
customerRouter.put('/customer/update',customerupdate)


export default customerRouter