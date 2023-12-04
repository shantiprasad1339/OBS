import { Sequelize ,DataTypes} from "sequelize";
import sequelize from "../config/db.config.js";

const Transfer =  sequelize.define("TransferMoney",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    BankName:{type:DataTypes.STRING, allowNull: false},
    customerName:{type:DataTypes.STRING, allowNull: false},
    IFSCCODE:{type:DataTypes.STRING, allowNull: false},
    ReceiverBankID:{type:DataTypes.INTEGER, allowNull: false},
    AccountNo:{type:DataTypes.INTEGER, allowNull: false},
    senderBankID:{type:DataTypes.STRING, allowNull: false},
    Amount:{type:DataTypes.STRING, allowNull: false},

},{tableName:"TransferMoney"}, {timestamps: true});
Transfer.sync()
// users.drop()
export default Transfer;