"use client";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function DeleteEmployeeModal({
  employee,
  closeModal,
  onDelete,
}) {
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleDelete = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(`/api/employee/${employee._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onDelete();
        closeModal();
      } else {
        console.error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
    setLoading(false); // Stop loading
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 rounded">
        <h2 className="text-2xl mb-5">Delete Employee</h2>
        <p>Are you sure you want to delete {employee.name}?</p>
        {loading && <LoadingSpinner />} {/* Show spinner while loading */}
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white mr-2"
        >
          Delete
        </button>
        <button onClick={closeModal} className="p-2 bg-gray-500 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}
