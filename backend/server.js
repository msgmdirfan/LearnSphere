
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
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const courseschema = new mongoose.Schema({
  id:{type:String,required:true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
 
});

const enrollschema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
  foot: { type: String, required: true },
  list: { type: String, required: true },
});

const lectureSchema = new mongoose.Schema({
  id: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
  topics: [
    {
      title: { type: String, required: true },
      videoUrl: { type: String, required: true },
      quiz: [
        {
          question: { type: String, required: true },
          options: [{ type: String, required: true }], // Array of strings for options
          correctAnswer: { type: String, required: true }
        }
      ],
      referenceLink: {
        title: { type: String, required: true },
        url: { type: String, required: true }
      }
    }
  ],
  additionalTopics: [
    {
      title: { type: String, required: true },
      videoUrl: { type: String, required: true },
      quiz: [
        {
          question: { type: String, required: true },
          options: [{ type: String, required: true }], // Array of strings for options
          correctAnswer: { type: String, required: true }
        }
      ],
      referenceLink: {
        title: { type: String, required: true },
        url: { type: String, required: true }
      }
    }
  ],
  totalDuration: { type: String, required: true },
  originalCost: { type: String }, // Optional, as in the original schema
  discountCost: { type: String, required: true },
  instructor: { type: String, required: true }
});


const User = mongoose.models.user || mongoose.model("user", userSchema);
const Enroll = mongoose.models.enroll || mongoose.model("enroll", enrollschema);
const Course = mongoose.models.course || mongoose.model("course", courseschema);
const Lecture = mongoose.models.lecture || mongoose.model("lecture", lectureSchema);


app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
}); 

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/lectures", async (req, res) => {
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

app.post("/addcourses",async(req,res)=>{
  const{formData}=req.body;
  console.log(formData);
  try{
    const result=await Course.insertMany(formData);
    res.json({success:true});
  }
  catch(err){ 
    console.log(err);
  }
});


app.post("/addlecture",async(req,res)=>{
  console.log(req.body);
  try{
    await Lecture.insertMany(req.body);
    res.json({success:true});
  }
  catch(err){
    console.log(err);
  }
});


app.post("/enrolls",async(req,res)=>{

  const{formData2}=req.body;
  try{
    const result=await Enroll.insertMany(formData2);
    res.json({success:true});
  }
  catch(err){

    console.log(err);

  }

});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


