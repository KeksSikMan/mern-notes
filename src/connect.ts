import mongoose from "mongoose";

export type TInput = {
  db: string;
};

export default ({ db }: TInput) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};