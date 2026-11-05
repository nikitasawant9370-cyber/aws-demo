import express from "express";

const app = express();
const PORT = 3001;

app.get("/getstudent", (req, res) => {
  res.send("student data");
});

app.get("/getteacher", (req, res) => {
  res.send("teacher data");
});
app.get("/getteach", (req, res) => {
  res.send("teach data");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
