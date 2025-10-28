import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const data = [
    { id: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Editor", email: "jane@example.com" },
    { id: 33, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 34, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 35, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 36, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 37, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 38, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 39, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 40, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 311, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 322, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 333, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 344, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 355, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 366, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 377, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 388, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 399, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 400, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 411, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 422, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 433, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 444, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 455, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 466, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 477, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 488, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 499, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 500, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 511, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 522, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 533, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 544, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 555, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 566, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 577, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 588, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 399, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 600, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 711, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 822, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 933, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 744, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 755, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 766, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 777, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 788, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
    { id: 799, name: "Sam Brown", role: "Viewer", email: "sam@example.com" },
  ];

  return (
    <div className="w-screen">
      {/* Header row: title + filter + actions */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">User List</h1>

        <div className="flex items-center relative">
          {/* Actions dropdown button — tiny space next to input */}
          <div className="relative ml-0.5">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
            >
              <span>...</span>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setShowMenu(false);
                    console.log("Print clicked");
                  }}
                >
                  Print
                </button>
                <button
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setShowMenu(false);
                    console.log("Excel clicked");
                  }}
                >
                  Export to Excel
                </button>
              </div>
            )}
          </div>

          {/* Filter box with icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Filter users..."
              className="w-64 pl-5 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto max-h-[700px] overflow-y-auto">
        <table className="min-w-full border-separate border border-gray-200 bg-white shadow-sm rounded-xl">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase sticky top-0 z-20">
            <tr className="divide-x divide-gray-200 ">
              <th className="py-3 px-4 text-center sticky left-0 bg-gray-100 z-30">
                Name
              </th>
              <th className="py-3 px-4 text-center">Role</th>
              <th className="py-3 px-4 text-center">Role2</th>
              <th className="py-3 px-4 text-center">Role3</th>
              <th className="py-3 px-4 text-center">Role4</th>
              <th className="py-3 px-4 text-center">Role5</th>
              <th className="py-3 px-4 text-center">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-600">
            {data.map((item) => (
              <tr
                key={item.id}
                className="divide-x divide-gray-200 hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <td className="px-4 sticky left-0 bg-gray-100 z-10">
                  {item.name}
                </td>
                <td className="px-4">{item.role}</td>

                <td className="px-4">{item.role}</td>
                <td className="px-4">{item.role}</td>
                <td className="px-4">{item.role}</td>
                <td className="px-4">{item.role}</td>

                <td className="px-4">{item.email}</td>
                <td className="px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 text-sm rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                      ...
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
