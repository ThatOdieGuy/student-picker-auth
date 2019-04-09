const db = require("../models");

const students = [
  "Aiman",
  "Christina",
  "Charlotte",
  "Dre",
  "Federico",
  "Freddy",
  "Kevin",
  "Keyanna",
  "Sachiko",
];

db.sequelize.sync({ force: true }).then(function() {

  db.Students.destroy({
    where: {},
    truncate: true
  })
  .then(() => {
    students.map(student => {
      db.Students.create({ 
        user_id: 1, // Not creating this user, so first registered user will get these
        student: student,
        selected_count: 0,
        absent: false
      })
    })
  });

});