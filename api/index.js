const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require("./routes/stripe");
const Stripe = require('stripe');
const cors = require("cors");


const app = express();

dotenv.config();

// Middleware
app.use(express.json())
app.use(cors());


// DB Connection
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error', () => {
    console.log("Connection Error!")
})

db.once('open', () => {
    console.log('Connected to DB!')
})

app.listen(process.env.PORT || 5000 , () => {
    console.log("Back-End Server is Running")
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout", stripeRoute);
