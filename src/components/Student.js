import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { student, onViewStudent, onEditStudent, onDeleteStudent } =
      this.props;

    return (
      <>
        <tr>
          <td>{student.id}</td>
          <td>{student.codeStudent}</td>
          <td>{student.nameStudent}</td>
          <td>{student.ageStudent}</td>
          <td>{student.gender == true ? "Nam" : "Nữ"}</td>
          <td>
            <div className="template-demo">
              <button
                type="button"
                onClick={() => onViewStudent(student)}
                className="btn btn-danger btn-icon-text"
              >
                Xem
              </button>
              <button
                type="button"
                onClick={() => onEditStudent(student)}
                className="btn btn-warning btn-icon-text"
              >
                Sửa
              </button>
              <button
                type="button"
                onClick={() => onDeleteStudent(student.id)}
                className="btn btn-success btn-icon-text"
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
