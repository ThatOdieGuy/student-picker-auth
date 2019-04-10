import React, { Component } from "react";
import SelectedStudent from "./SelectedStudent";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import axios from "axios";

/**
 * Shows the selected student and list of students
 */
export default class StudentPicker extends Component {
  state = { students: [] };

  componentDidMount() {
    this.updateStudents();
  }

  updateStudents = () => {
    // We do not need to modify this for our new auth methods
    //   as our login knows what user we are and will determine what students we get
    axios.get("/api/students").then(response => {
      this.processStudents(response.data);
    });
  }

  processStudents(students) {
    // Students comes back as an array of objects, put them in array of strings
    
    let studentsArr = students.map(studentObj => studentObj.student);

    this.setState({ students: studentsArr });
  }

  render() {
    return (
      <div>
        <h1>Student Picker</h1>
        <SelectedStudent students={this.state.students}/>
        <StudentList students={this.state.students}/>
        <AddStudent afterAddCallback={this.updateStudents}/>
      </div>
    );
  }
}