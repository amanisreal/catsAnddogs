import pg from "pg";

const express = require('express');
const userRouter = require('./router/users') 

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(userRouter);

// const db = new pg.Client({
//     user: "postgresql",
//     host: "localhost",
//     database: "world",
//     password: "aman1234"
// });

// db.connect();

// db.query('SELECT * FROM rawdataforcard', (err, res) => {
//     if(err){
//         console.log("Error exceuting query", err.stack);
//     }
//     else{
//         quiz = res.rows;
//     }
// });

app.listen(port, () => {
    console.log('Server is live on port ' + port)
})