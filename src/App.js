// import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";
import Title from "./components/Title";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          codeStudent: "SV001",
          nameStudent: "Nguyễn Văn A",
          ageStudent: 23,
          gender: true,
          birthDate: "12 / 3 / 2002",
          birthPlace: "Hà Nội",
          address: "Ba Đình",
        },
        {
          id: 2,
          codeStudent: "SV002",
          nameStudent: "Nguyễn Thị B",
          ageStudent: 22,
          gender: false,
          birthDate: "12 / 3 / 2003",
          birthPlace: "TP. Hồ Chí Minh",
          address: "Quận 1",
        },
        {
          id: 3,
          codeStudent: "SV003",
          nameStudent: "Nguyễn Văn C",
          ageStudent: 23,
          gender: true,
          birthDate: "14 / 5 / 2002",
          birthPlace: "Hà Nội",
          address: "Cầu giấy",
        },
      ],
      isModalOpen: false, // Form
      editingStudent: null, // Chỉnh sửa
      isViewing: false, // Xem trước
      filteredStudents: [], // Đây là danh sách sinh viên sau khi lọc
      searchQuery: "", // Khởi tạo searchQuery để không bị null
      sortOrder: "abc", // Thứ tự sắp xếp mặc định
    };
  }

  //Tạo mới student
  handleCreateStudent = () => {
    this.setState({
      editingStudent: null,
      isModalOpen: true,
      isViewing: false,
    });
  };

  //Search
  componentDidMount() {
    this.setState({ filteredStudents: this.state.students });
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = () => {
    const { students, searchQuery, sortOrder } = this.state;
    const filteredStudents = students.filter((student) =>
      student.nameStudent.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sắp xếp filteredStudents theo sortOrder
    switch (sortOrder) {
      case "abc":
        filteredStudents.sort((a, b) =>
          a.nameStudent.localeCompare(b.nameStudent)
        );
        break;
      case "123":
        filteredStudents.sort((a, b) => a.ageStudent - b.ageStudent);
        break;
      case "reverse":
        filteredStudents.sort((a, b) =>
          b.nameStudent.localeCompare(a.nameStudent)
        );
        break;
      default:
        break;
    }
    this.setState({ filteredStudents });
  };

  handleSortChange = (sortOrder) => {
    this.setState({ sortOrder }, this.handleSearch); // Cập nhật sortOrder và tìm kiếm lại
  };

  // Save
  handleSaveStudent = (student) => {
    const { students, editingStudent } = this.state;
    if (editingStudent) {
      this.setState({
        students: students.map((s) =>
          s.id === editingStudent.id ? { ...s, ...student } : s
        ),
        isModalOpen: false,
      });
    } else {
      this.setState({
        students: [...students, { id: students.length + 1, ...student }],
        isModalOpen: false,
      });
    }
  };

  //Delete
  handleDeleteStudent = (id) => {
    this.setState({
      students: this.state.students.filter((s) => s.id !== id),
    });
  };

  //Edit
  handleEditStudent = (student) => {
    this.setState({
      editingStudent: student,
      isModalOpen: true,
      isViewing: false,
    });
  };

  // View
  handleViewStudent = (student) => {
    this.setState({
      editingStudent: student,
      isModalOpen: true,
      isViewing: true,
    });
  };

  //Tắt cửa sổ
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { students, isModalOpen, editingStudent } = this.state;
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Title
              onCreateStudent={this.handleCreateStudent}
              searchQuery={this.state.searchQuery}
              onSearchChange={this.handleSearchChange}
              onSearch={this.handleSearch}
              sortOrder={this.state.sortOrder}
              onSortChange={this.handleSortChange}
            />
            <ListStudent
              students={this.state.filteredStudents || students}
              onViewStudent={this.handleViewStudent}
              onEditStudent={this.handleEditStudent}
              onDeleteStudent={this.handleDeleteStudent}
            />
          </div>
        </div>
        <div className="col-5 grid-margin ">
          {isModalOpen && (
            <Form
              isViewing={this.state.isViewing}
              editingStudent={editingStudent}
              onClose={this.handleCloseModal}
              onSave={this.handleSaveStudent}
            />
          )}
        </div>
      </div>
    );
  }
}
