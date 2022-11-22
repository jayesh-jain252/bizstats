import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

const app = express();

// db
import connectDB from "./db/connect.js";

// routets
import authRouter from "./routes/authRoutes.js";

// MiddleWare
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("BizStats");
});

app.use("/api/vi/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Connected to DB....");
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
