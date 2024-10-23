"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

export default function Home() {
  const [view, setView] = useState("all");
  return (
    <div className="flex">
      <Sidebar setView={setView} />
      <div className="flex-1 p-5">
        {view === "all" && <EmployeeList />}
        {view === "add" && (
          <AddEmployee onAdd={(newEmployee) => setView("all")} />
        )}
      </div>
    </div>
  );
}
