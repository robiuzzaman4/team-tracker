import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;