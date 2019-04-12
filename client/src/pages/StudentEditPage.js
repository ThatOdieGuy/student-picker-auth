import React from "react";
import axios from "axios";

export default class StudentEditPage extends React.Component {
  state = { originalStudentName: "", newStudentName: "", messageText: "" }

  componentDidMount() {
    console.log("match: ", this.props.match);

    let student = this.props.match.params.student;
    this.setState({ 
        originalStudentName: student,
        newStudentName: student
      });
  }

  onFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Alternatively, you could add onChange handlers for each field individually (if you had multiple fields)
  // onNewStudentNameChange = (event) => {
  //   this.setState({ newStudentName: event.target.value });
  // }

  // onMessageTextChange = (event) => {
  //   this.setState({ messageText: event.target.value });
  // }

  submitEdit = (event) => {
    event.preventDefault();

    // POST our data to our API
    // We need the original name to identify the record, and the new one for what we're changing.
    axios.post("/api/students/edit", 
      { 
        originalStudentName: this.state.originalStudentName, 
        newStudentName: this.state.newStudentName
      }).then(response => {
        // Navigate the user back to the UserHomePage after the edit completed
        this.props.history.push("/UserHomePage");
      })
  }

  // This was just to demo another button in the form
  clearButtonPressed = event => {
    event.preventDefault();
    console.log("clearButtonPressed");
  }

  render() {
    /// If DONEZO was in the state and set to true, you could redirect like this
    // if (this.state.DONEZO) {
    //   return <Redirect to="/asdfjasdf/"/>
    // }

    return (
      <div>
        Edit Student
        <form onSubmit={this.submitEdit}>
          <input type="text" name="newStudentName" value={this.state.newStudentName} onChange={this.onFieldChange}/>
          <input type="submit" value="Edit Student"/>
          <button onClick={this.clearButtonPressed}>Clear thing</button>
        </form>
      </div>
    )
  }
}

