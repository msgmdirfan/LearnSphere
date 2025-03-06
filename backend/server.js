const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
 
});

const courseschema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  link: { type: String, required: true },
});

const enrollschema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
  foot: { type: String, required: true },
  list: { type: String, required: true },
});

const lectureschema = new mongoose.Schema({
  id: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
  topics: [{ title: { type: String, required: true }, videoUrl: { type: String, required: true } }],
  additionalTopics: [{ title: { type: String, required: true }, videoUrl: { type: String, required: true } }],
  totalDuration: { type: String, required: true },
  originalCost: { type: String },
  discountCost: { type: String, required: true },
  instructor: { type: String, required: true },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
const Enroll = mongoose.models.enroll || mongoose.model("enroll", enrollschema);
const Course = mongoose.models.course || mongoose.model("course", courseschema);
const Lecture = mongoose.models.lecture || mongoose.model("lecture", lectureschema);

app.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user._id, role: user.role }, "secretkey", { expiresIn: "1h" });
  res.json({ token, role: user.role });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/lecture", async (req, res) => {
  try {
    const lecture = await Lecture.find({});
    res.json(lecture);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/enroll", async (req, res) => {
  try {
    const enroll = await Enroll.find({});
    res.json(enroll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
