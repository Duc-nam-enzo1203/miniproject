import React, { Component } from "react";
import Student from "./Student";

export default class ListStudent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // let { renderListStudent } = this.props;

    // let render = renderListStudent.map((student, index) => {
    //   return <Student key={index} renderStudent={student} id={index + 1} />;
    // });
    const { students, onViewStudent, onEditStudent, onDeleteStudent } =
      this.props;

    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.students.map((student) => (
                <Student
                  key={student.id}
                  student={student}
                  onViewStudent={onViewStudent}
                  onEditStudent={onEditStudent}
                  onDeleteStudent={onDeleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import Student from "./Student";

// export default function ListStudent(props) {
//   return (
//     <div className="card-body">
//       <h3 className="card-title">Danh sách sinh viên</h3>
//       <div className="table-responsive pt-3">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>{props.students.id}</th>
//               <th>Mã sinh viên</th>
//               <th>Tên sinh viên</th>
//               <th>Tuổi</th>
//               <th>Giới tính</th>
//               <th>Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             <Student />
//             <Student />
//             <Student />
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
