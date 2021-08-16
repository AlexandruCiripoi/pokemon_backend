import 'dotenv/config.js';
import express from "express";
import pokeRouter from "./routes/pokeRouter.js";
import errorHandler from "./middlewares/errorHandler.js"
import './db/mongooseClient.js';


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // needed to access body from req
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});
app.use("/pokemon", pokeRouter);
app.use("/", (req, res) => res.send("Welcome to the Pokemon API"));
app.use(errorHandler)
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);


