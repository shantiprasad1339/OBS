import express from "express"
import UserRouter from "./router/user.router.js";
import customerRouter from "./router/CustomerData.router.js";
import transferRouter from "./router/TransferMoney.router.js";
import cors from "cors"

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors())
app.use(UserRouter)
app.use(customerRouter)
app.use(transferRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
