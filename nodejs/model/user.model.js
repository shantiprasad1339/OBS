import { Sequelize ,DataTypes} from "sequelize";
import sequelize from "../config/db.config.js";

const users =  sequelize.define("User",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    username:{type:DataTypes.STRING, allowNull: false},
    password:{type:DataTypes.STRING, allowNull: false},
    email:{type:DataTypes.STRING, allowNull: false},
    
},{tableName:"User"}, {timestamps: true});
users.sync()
// users.drop()
export default users;