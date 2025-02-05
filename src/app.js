const express = require('express');
const app = express();
const connectDB = require('./config/database');
const cors = require('cors');
const PORT = 3001;

app.use(express.json());
app.use(cors());

const shipmentRouter = require('./routes/shipmentRouter');
app.use('/',shipmentRouter);

connectDB().then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
        console.log("Server is running on port "+PORT+" ...");
    });
    console.log("!!Shree Ganesha!!");
}).catch((err) => {
    console.log("Database couldn't be connected!!"+err.message);
})
