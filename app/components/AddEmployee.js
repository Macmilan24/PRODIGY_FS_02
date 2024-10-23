"use client";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function AddEmployee({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    dateofJoinig: "",
  });
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const res = await fetch("/api/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const newEmployee = await res.json();
    if (res.ok) {
      onAdd(newEmployee);
      setFormData({
        name: "",
        email: "",
        position: "",
        department: "",
        dateofJoinig: "",
      });
    }
    setLoading(false); // Stop loading
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-5">Add New Employee</h2>
      {loading && <LoadingSpinner />} {/* Show spinner while loading */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border mb-3 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border mb-3 w-full"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          className="p-2 border mb-3 w-full"
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
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
        <button type="submit" className="p-2 bg-green-500 text-white">
          Add Employee
        </button>
      </form>
    </div>
  );
}
