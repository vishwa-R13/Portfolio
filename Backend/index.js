const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const contact = require("./model/Contact");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
dotenv.config();

mdb
  .connect(process.env.MONGODB_URL) // if it doesn't connect with localhost replace it with 127.0.0.1 ip address
  .then(() => {
    console.log("MDB connection successful");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>vishwa's backend</h1>");

});

app.post('/contact', async (req, res) => {
  try {
    const { Name, email } = req.body;
    const newContact = new contact({
      Name: Name,
      email: email,
    });
    await newContact.save();
    return res.status(201).json({ message: "Message sent successfully" }); 
  } catch (error) {
    return res.status(400).json({ message: "Message Unsent", error: error.message }); 
  }
});


app.listen(PORT,()=>{
  console.log("server connected Successfully");
})