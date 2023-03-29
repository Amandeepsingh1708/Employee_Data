import React, { useState } from "react";

function EmployeeList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    designation: "",
    gender: "",
    course: "",
  });
  const [image, setImage] = useState("");
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      // Add new data to table
      setTableData([...tableData, formData]);
    } else {
      // Update existing data in table
      const newData = [...tableData];
      newData[editingIndex] = formData;
      setTableData(newData);
      setEditingIndex(null);
    }
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      designation: "",
      gender: "",
      course: "",
    });
  };

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleEdit = (index) => {
    const editData = tableData[index];
    setFormData(editData);
    setEditingIndex(index);
  };

  return (
    <>
        
      <div className="container">
        <div className="main_employee">
        <form onSubmit={handleSubmit}>
        <h2>Enter Employee Details Here!</h2>
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <label htmlFor="designation">Designation:</label>
          <input
            className="form-control"
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleInputChange}
          />
          <label htmlFor="gender">Gender:</label>
          <input
            className="form-control"
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
          <label htmlFor="course">Course:</label>
          <input
            className="form-control"
            type="text"
            name="course"
            id="course"
            value={formData.course}
            onChange={handleInputChange}
          />
          
          <button className="btn btn-primary" type="submit">
            {editingIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
        </div>
        

        <div>
          <h1>Employee Details!</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone Number</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.designation}</td>
                  <td>{data.gender}</td>
                  <td>{data.course}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
