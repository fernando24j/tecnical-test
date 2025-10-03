import mongoose from 'mongoose';
const { connect } = mongoose;


export const dbConnection = async () => {
  try {
    // let uri = process.env.MONGODB_URI;
     let uri = 'mongodb+srv://myconversationtrainer:myconversationtr4iner@cluster0.w7mbx.mongodb.net/conversational';
    // console.log(uri)

    if (!uri) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env"
      );
    }
    const result = await connect(uri, {
      bufferCommands: false,
    });
    console.log("\x1b[32m[2] DB Online \x1b[0m");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializad DB");
  }
};
