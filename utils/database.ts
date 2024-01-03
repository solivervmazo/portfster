import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async (): Promise<void> => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '', {
      dbName: 'portfster',
    });
    isConnected = true;
  } catch (error) {
    console.log('DB', error);
  }
};
