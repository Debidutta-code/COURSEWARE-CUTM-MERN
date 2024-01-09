// Server code
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/CoursewareCutm', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

const courseSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  subjectCredit: {
    type: Number,
    required: true,
  },
  subjectTeacher: {
    type: String,
    required: true,
  },
  subjectModules: {
    type: Object,
    required: true,
  },
});

const CourseDetails = mongoose.model('CourseDetails', courseSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/homepagecontent', async (req, res) => {
  try {
    const courses = await CourseDetails.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

server.get('/cardclicked/:subjectCode', async (req, res) => {
    const subjectCode = req.params.subjectCode;  // Use req.params.subjectCode to access the parameter
    try {
        const course = await CourseDetails.find({ 'subject-code': subjectCode });
        if (course.length > 0) {
            res.json({ success: true, course : course[0] });
        } else {
            res.json({ success: false, message: 'Not Found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});


server.listen(8080, () => {
  console.log("server running...");
});
