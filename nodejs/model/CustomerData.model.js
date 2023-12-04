import { Sequelize ,DataTypes} from "sequelize";
import sequelize from "../config/db.config.js";

const customer =  sequelize.define("customer",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    CustomerName:{type:DataTypes.STRING, allowNull: false},
    Gender:{type:DataTypes.STRING, allowNull: false},
    Age:{type:DataTypes.INTEGER, allowNull: false},
    FullAddress:{type:DataTypes.STRING, allowNull: false},
    AccountNo:{type:DataTypes.INTEGER, allowNull: false},
    BankID:{type:DataTypes.STRING, allowNull: false},

    
},{tableName:"customer"}, {timestamps: true});
customer.sync()
// users.drop()
export default customer;