import express from "express";
import cors from "cors";
import router from "./routes/UserRoute.js";

const PORT = process.env.PORT || 5000;
const app = express();

//memanggil api
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (_, res) => {
    res.send('saya lagi belajar API');
  });

//handling error
app.use((err, req, res, next) => {
    res.status(400).json({
      message: err.message,
    });
  });

app.listen(PORT, ()=> {
    console.log(`Server has been running in http://localhost:${PORT}`)
});