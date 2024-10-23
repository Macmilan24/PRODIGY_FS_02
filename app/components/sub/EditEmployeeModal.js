"use client";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function EditEmployeeModal({ employee, closeModal, onUpdate }) {
  const [formData, setFormData] = useState({
    name: employee.name,
    email: employee.email,
    position: employee.position,
    department: employee.department,
    dateofJoinig: employee.dateofJoinig.split("T")[0],
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const res = await fetch(`/api/employee/${employee._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updatedEmployee = await res.json();
        onUpdate(updatedEmployee);
        closeModal();
      } else {
        console.error("Failed to update employee");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
    setLoading(false); // Stop loading
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 rounded">
        <h2 className="text-2xl mb-5">Edit Employee</h2>
        {loading && <LoadingSpinner />} {/* Show spinner while loading */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border mb-3 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border mb-3 w-full"
            required
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="p-2 border mb-3 w-full"
            required
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="p-2 border mb-3 w-full"
            required
          />
          <input
            type="date"
            name="dateofJoinig"
            value={formData.dateofJoinig}
            onChange={handleChange}
            className="p-2 border mb-3 w-full"
            required
          />
          <button type="submit" className="p-2 bg-blue-500 text-white">
            Update Employee
          </button>
          <button
            type="button"
            className="p-2 bg-gray-500 text-white ml-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
