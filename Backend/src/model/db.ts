//import mysql from 'mysql';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
dotenv.config({});

export const abrirDB=open({
    filename:"./ProyectoLenguajes.db",
    driver:sqlite3.Database
});


// this is a top-level await 


/*const DB_CONFIG={
    //tiempo de espera para conexion
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:"",
    database:process.env.DB_NAME,
    multipleStatements:true
}
console.log(DB_CONFIG);
export const pool=mysql.createPool(DB_CONFIG);*/