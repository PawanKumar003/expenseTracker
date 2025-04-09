import React, { useState } from "react";

function Modal({ showModal, setShowModal, editdata }) {
  console.log(editdata, "modala111");
  return (
    <div className="">
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white p-5 rounded shadow-lg w-2/5">
            <h2 className="text-xl font-bold">Custom Modal</h2>
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  value={editdata.item}
                  id="floating_first_name"
                  className=""
                  placeholder="Enter Item"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="floating_last_name"
                  value={editdata.num}
                  id="floating_last_name"
                  className=""
                  placeholder="Nymber"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  type="text"
                  name="floating_last_name"
                  value={editdata.desc}
                  id="floating_last_name"
                  className=""
                  placeholder="Decription"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 p-2 bg-red-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
