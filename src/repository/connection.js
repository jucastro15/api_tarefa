import mysql from 'mysql2/promise';


const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
    
   
    typeCast: function (field, next) {
      
        if (field.type === 'TINY' && field.length === 1) {
            return field.string() === "1"; 
        }
      
        if (field.type.includes('DECIMAL')) {
            return Number(field.string()); 
        }
             return next(); 
    }
});

console.log('--> Conexão com BD realizada <3!!');

export default con;
