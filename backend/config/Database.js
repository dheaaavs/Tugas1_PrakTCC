import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("123220134_Catatan", "root", "", {
  host: "35.223.100.248",
  dialect: "mysql",
});

export default db;
