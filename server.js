import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / Math.pow(height, 2);
  res.send("your bmi is: " + bmi);
});

app.listen(port);
