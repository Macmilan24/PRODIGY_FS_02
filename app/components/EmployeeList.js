"use client";
import { useEffect, useState } from "react";
import EditEmployeeModal from "./sub/EditEmployeeModal";
import DeleteEmployeeModal from "./sub/DeleteEmployeeModal";
import LoadingSpinner from "./LoadingSpinner";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for fetching employees
  const [editEmployee, setEditEmployee] = useState(null);
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true); // Start loading when fetching begins
      const res = await fetch("/api/employee");
      const data = await res.json();
      setEmployees(data);
      setLoading(false); // Stop loading when fetching is done
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true); // Start loading when deletion begins
    const res = await fetch(`/api/employee/${id}`, { method: "DELETE" });
    if (res.ok) {
      setEmployees(employees.filter((employee) => employee._id !== id));
      setDeleteEmployee(null);
    }
    setLoading(false); // Stop loading when deletion is done
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-5">All Employees</h2>
      {loading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        <ul>
          {employees.map((employee) => (
            <li
              key={employee._id}
              className="border p-3 mb-3 flex justify-between"
            >
              <div>
                <p>
                  <strong>Name:</strong> {employee.name}
                </p>
                <p>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p>
                  <strong>Position:</strong> {employee.position}
                </p>
                <p>
                  <strong>Department:</strong> {employee.department}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setEditEmployee(employee)}
                  className="p-2 bg-blue-500 text-white rounded-md shadow-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteEmployee(employee)}
                  className="p-2 bg-red-500 text-white rounded-md shadow-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editEmployee && (
        <EditEmployeeModal
          employee={editEmployee}
          closeModal={() => setEditEmployee(null)}
          onUpdate={(updatedEmployee) => {
            setEmployees(
              employees.map((emp) =>
                emp._id === updatedEmployee._id ? updatedEmployee : emp
              )
            );
          }}
        />
      )}

      {deleteEmployee && (
        <DeleteEmployeeModal
          employee={deleteEmployee}
          closeModal={() => setDeleteEmployee(null)}
          onDelete={() => handleDelete(deleteEmployee._id)}
        />
      )}
    </div>
  );
}
