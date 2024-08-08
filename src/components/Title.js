import React, { Component } from "react";

export default class Title extends Component {
  handleSortChange = (e) => {
    this.props.onSortChange(e.target.value); // Gọi hàm từ props để thông báo cho App component
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              onClick={this.props.onCreateStudent}
              className="btn btn-primary btn-icon-text"
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form
              className="search-form"
              action="#"
              // onSubmit={this.handleSearch}
            >
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                value={this.props.searchQuery}
                onChange={this.props.onSearchChange}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.props.onSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select
              className="form-control"
              value={this.props.sortOrder}
              onChange={this.handleSortChange}
            >
              <option value="">Sắp xếp</option>
              <option value="abc">ABC def</option>
              <option value="123">Number</option>
              <option value="reverse">Ngược lại</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
