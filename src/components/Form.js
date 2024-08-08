import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeStudent: props.editingStudent?.codeStudent || "",
      nameStudent: props.editingStudent?.nameStudent || "",
      ageStudent: props.editingStudent?.ageStudent || "",
      gender: props.editingStudent?.gender || "Nam",
      birthDate: props.editingStudent?.birthDate || "",
      birthPlace: props.editingStudent?.birthPlace || "Hà nội",
      address: props.editingStudent?.address || "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editingStudent !== this.props.editingStudent) {
      this.setState({
        codeStudent: this.props.editingStudent?.codeStudent || "",
        nameStudent: this.props.editingStudent?.nameStudent || "",
        ageStudent: this.props.editingStudent?.ageStudent || "",
        gender: this.props.editingStudent?.gender || "Nam",
        birthDate: this.props.editingStudent?.birthDate || "",
        birthPlace: this.props.editingStudent?.birthPlace || "Hà nội",
        address: this.props.editingStudent?.address || "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      codeStudent,
      nameStudent,
      ageStudent,
      gender,
      birthDate,
      birthPlace,
      address,
    } = this.state;
    this.props.onSave({
      codeStudent,
      nameStudent,
      ageStudent: Number(ageStudent),
      gender,
      birthDate,
      birthPlace,
      address,
    });
  };

  render() {
    const { onClose, editingStudent } = this.props;
    const {
      codeStudent,
      nameStudent,
      ageStudent,
      gender,
      birthDate,
      birthPlace,
      address,
    } = this.state;

    //View
    const isViewing = this.props.isViewing;
    return (
      <div>
        <div className="card min-vh-100">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <h6 className="card-title">
              {editingStudent ? "Edit Student" : "Create Student"}
            </h6>
            <form className="form-sample" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    id="codeStudent"
                    type="text"
                    className="form-control"
                    value={codeStudent}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="nameStudent"
                    value={nameStudent}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="ageStudent"
                    value={ageStudent}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="gender"
                    value={gender}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    id="birthDate"
                    value={birthDate}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="birthPlace"
                    value={birthPlace}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  >
                    <option value="Hà nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Đà nẵng">Đà Nẵng</option>
                    <option value="Quảng Ninh">Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={this.handleChange}
                    disabled={isViewing}
                  />
                </div>
              </div>
              <div className="template-demo">
                <button
                  type="button"
                  onClick={onClose}
                  className=" btn btn-warning"
                >
                  Cancel
                </button>
                {!isViewing && (
                  <button type="submit" className=" btn btn-primary me-2">
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
