import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("123220134_Catatan", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;