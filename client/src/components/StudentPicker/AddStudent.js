import React from 'react';
import axios from 'axios';

export default class AddStudent extends React.Component {
  state = { student: "" }

  fieldChanged = (event) => {
    this.setState({ student: event.target.value });
  }

  submitStudent = () => {
    // Post to the API to save to the database
    axios.post("/api/students/add", { student: this.state.student }).then(response => {
      console.log("Student added");

      // Tell our parent component that we've updated the database
      if (this.props.afterAddCallback) {
        this.props.afterAddCallback();
      }
    })

  }

  render() {
    return (
      <div>
        Student: <input type="text" name="student" onChange={this.fieldChanged}/>
        <button onClick={this.submitStudent}>Add Student</button>
      </div>
    )
  }
}