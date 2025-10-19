import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const data = [
    { id: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Editor", email: "jane@example.com" },
    { id: 3, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">User List</h1>

      <div className="w-screen overflow-x-auto">
        <table className="w-full border border-gray-200 bg-white shadow-sm rounded-xl">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr className="divide-x divide-gray-200">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-600">
            {data.map((item) => (
              <tr
                key={item.id}
                className="divide-x divide-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.role}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 text-sm rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
