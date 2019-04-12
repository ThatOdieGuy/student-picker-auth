const router = require("express").Router();
const db = require("../../models");
const authMiddleware = require("./authMiddleware");

// Route: GET /api/students
router.get("/", authMiddleware, (req, res) => {
  // authMiddleware will verify our our user authentication
  //  req.session.user_id will hold the id of the logged in user

  const query = { 
    where: { user_id: req.session.user_id } 
  }

  db.Students.findAll(query).then(students => {
    res.json(students);
  });
})

// Route: POST /api/students/add
router.post("/add", authMiddleware, (req, res) => {
    // authMiddleware will verify our our user authentication
  //  req.session.user_id will hold the id of the logged in user
  
  const student = req.body.student;
  
  console.log("Adding a new student");

  db.Students.create({ student: student, user_id: req.session.user_id }).then(() => {
    //Created new student!
    
    res.json({ studentReceived: student });
  });
});

router.post("/edit", authMiddleware, (req, res) => {
  let originalStudentName = req.body.originalStudentName;
  let newStudentName = req.body.newStudentName;
  db.Students.update(
    { student: newStudentName }, 
    { where: { student: originalStudentName }}).then(() => {
      res.json({ success: true });
    });
});

module.exports = router;
