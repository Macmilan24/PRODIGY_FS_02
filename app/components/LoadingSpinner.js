import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
      <div className="loader"></div>
    </div>
  );
}
