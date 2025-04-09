import React from "react";

function Sidebar() {
  return (
    <section className="sidebar-section max-w-1/6 w-full h-screen bg-blue-500 top-0 py-4 sticky">
      <div className="flex justify-center">
        <ul>
          <li className="mb-4 text-lg cursor-pointer hover:bg-gray-500 px-3 hover:text-white rounded-[5px]">
            Dashbord
          </li>
          <li className="mb-4 text-lg cursor-pointer hover:bg-gray-500 px-3 hover:text-white rounded-[5px]">
            Admin
          </li>
          <li className="mb-4 text-lg cursor-pointer hover:bg-gray-500 px-3 hover:text-white rounded-[5px]">
            Analytics
          </li>
          <li className="mb-4 text-lg cursor-pointer hover:bg-gray-500 px-3 hover:text-white rounded-[5px]">
            Dashbord
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
