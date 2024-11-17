const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI }/${process.env.DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('connection error:' ,error);
    }
}

module.exports = connectDB