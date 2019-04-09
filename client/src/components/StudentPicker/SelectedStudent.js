import React from 'react';

export default class SelectedStudent extends React.Component {
  state = { selectedStudent: "" }

  handleClick = () => {
    let rand = Math.floor(Math.random() * this.props.students.length);

    let student = this.props.students[rand];

    this.setState({ selectedStudent: student });
  }

  render() {
    return (
      <div>
        <p><b>Selected Student:</b></p>
        <h1>{this.state.selectedStudent}</h1>
        <button onClick={this.handleClick}>Pick a Student</button>
      </div>
    );
  }
}