import mongoose from 'mongoose';

const connect = async () => {
  const MONGO_URL = process.env.MONGO_URL as string;
  try {
    await mongoose.connect(MONGO_URL);

    console.log('Mongo connection successful');
  } catch (error) {
    throw new Error('Error in connecting to mongoDB');
  }
};

export default connect;
