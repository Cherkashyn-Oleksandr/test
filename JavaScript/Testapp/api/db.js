import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Q1w2E3a1",
    database:"test"
})