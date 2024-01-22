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
  subject_name: {
    type: String,
    required: true,
  },
  subject_credit: {
    type: Number,
    required: true,
  },
  subject_teacher: {
    type: String,
    required: true,
  },
  subject_modules: {
    type: Object,
    required: true,
  },
  subject_code: {
    type: String,
    required: true,
  }
});

const teacherSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  teacher_email: {
    type: String,
    required: true,
  },
  teacher_password: {
    type: String,
    required: true,
  },
});

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
});

const teacherLoginDetailsSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  teacher_login_time: {
    type: String,
    required: true,
  },
  teacher_logout_time: {
    type: String,
  },
  teacher_login_date: {
    type: String,
    required: true,
  },
});

const CourseDetails = mongoose.model('CourseDetails', courseSchema);
const TeacherDetails = mongoose.model('teacherdetails', teacherSchema);
const AdminDetails = mongoose.model('admindetails', adminSchema);
const TeacherLoginDetails = mongoose.model('teacherlogindetails', teacherLoginDetailsSchema);

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
    const course = await CourseDetails.find({ 'subject_code': subjectCode });
    if (course.length > 0) {
      res.json({ success: true, course: course[0] });
    } else {
      res.json({ success: false, message: 'Not Found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

server.get('/teacher/authentication/:username/:password', async (req, res) => {
  const { username, password } = req.params;

  try {
    const teacher = await TeacherDetails.findOne({ 'teacher_email': username, 'teacher_password': password });

    if (teacher) {
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();
      res.json({ success: true, teacher: teacher, time : time, date : date });
    } else {
      res.json({ success: false, message: 'User Not Found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

server.get('/administrator/authentication/:username/:password', async (req, res) => {
  const { username, password } = req.params;

  try {
    const admin = await AdminDetails.findOne({ 'admin_email': username, 'admin_password': password });

    if (admin) {
      res.json({ success: true, admin: admin });
    } else {
      res.json({ success: false, message: 'User Not Found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

server.post('/techer/addcourses', async (req, res) => {
  const { subjectName, subjectCredit, subjectCode, subjectTeacher, subjectModules } = req.body;
  const course = new CourseDetails();
  course.subject_name = subjectName;
  course.subject_code = subjectCode;
  course.subject_credit = subjectCredit;
  course.subject_teacher = subjectTeacher;
  course.subject_modules = subjectModules;

  await course.save();

  res.json({success:true, course : course});
  console.log(course);
});

server.post('/addteacher', async (req, res) => {
  const {name, email, password} = req.body;
  
  const teacher = new TeacherDetails();

  teacher.teacher_name = name;
  teacher.teacher_email = email;
  teacher.teacher_password = password;

  await teacher.save();

  res.json({success : true, teacher : teacher});
  console.log(teacher);
})

server.post('/teacherlogindetails', async (req, res) => {
  const { name, login_time, logout_time, login_date } = req.body;

  try {
    const teacherLogin = new TeacherLoginDetails({
      teacher_name: name,
      teacher_login_time: login_time,
      teacher_logout_time: logout_time,
      teacher_login_date: login_date,
    });

    // Save the login details to the database
    await teacherLogin.save();


    console.log(teacherLogin);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});


server.get('/teacherlogindetails', async (req, res) => {
  try {
    const teachers = await TeacherLoginDetails.find();
    res.json({success : true, teachers : teachers});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
})

server.listen(8080, () => {
  console.log("server running...");
});
