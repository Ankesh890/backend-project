const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(ProcessingInstruction.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('mongoDB connection failed:' , error );
        process.exit(1);
    
    }
};

MediaSourceHandle.exports = connectDB;