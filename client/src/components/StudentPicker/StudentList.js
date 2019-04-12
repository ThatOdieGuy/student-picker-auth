import React from 'react';
import { Link } from "react-router-dom";

export default class StudentList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {/* Create a StudentListItem for every student in this.props.student */}
          {this.props.students.map(student =>
            <StudentListItem key={student} student={student}/>
          )}
        </ul>
      </div>
    );
  }
}

// Just a simple component I put in the same file to render each student in the list
function StudentListItem(props) {
  return (
    <li>
      {props.student} - <Link to={"/StudentEditPage/" + props.student}>Edit</Link>
    </li>
  )
}
