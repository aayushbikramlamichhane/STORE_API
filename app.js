const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/NotFound.js');
const errorHandlerMiddleware = require('./middleware/ErrorHandler.js');

require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connection.js');
const productRouter = require('./routes/products.routes.js');

// middleware

app.use(express.json());

// rootes

app.get('/',(req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products</a>')
})

app.use('/api/v1/products', productRouter);

// products routes 
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



connectDB()
.then(()=> {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is listening at PORT: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('MongoDB connection failed:' ,err)
})