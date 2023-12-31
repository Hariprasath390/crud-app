const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("../server/models/Users");

const app = express();

// Allow requests from any origin (for development purposes)
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const _id = req.params.id;
  console.log(_id, "_________");
  UserModel.findById({ _id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const _id = req.params.id;
  UserModel.findByIdAndUpdate(
    _id,
    { $set: { name: req.body.name, email: req.body.email, age: req.body.age } },
    { new: true } // Return the modified document
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const _id = req.params.id;
  UserModel.findByIdAndDelete(_id)
    .then(() => res.json({ message: "User deleted successfully." }))
    .catch((err) => res.status(500).json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Axios request example

// const userData = {
//   name: "hjkjj",
//   email: "sfjsdgfj@gmail.com",
//   age: "12",
// };

// axios
//   .post("http://localhost:8000/createUser", userData)
//   .then((result) => console.log("Axios Result:", result.data))
//   .catch((error) => {
//     console.error("Axios Error:", error.message);
//     if (error.response) {
//       console.error("Response Data:", error.response.data);
//       console.error("Status Code:", error.response.status);
//     }
//   });
