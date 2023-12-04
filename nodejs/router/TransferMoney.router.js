import Express from "express";
import { TransferMoney, transferdataget } from "../controller/TransferMoney.controller.js";

const transferRouter = Express.Router()
transferRouter.post('/money/transfer',TransferMoney)
transferRouter.get('/money/transfer/get',transferdataget)


export default transferRouter