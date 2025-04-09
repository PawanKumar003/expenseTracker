import React from "react";

function ExpenseEditForm({ handleUpdate, seteditData, editData }) {
  return (
    <section className="rounded-xl expense-tracker-section w-1/2 h-full mt-4 p-3 text-center text-black mx-auto border border-gray-300 bg-gray-200">
      <div className="container-fluid px-5">
        <div className="expense-tracker-heading">
          <h1 className="text-4xl bold">Edit Form Expense Tracker</h1>
        </div>
        <div className="m-auto p-5 mt-4 mx-auto w-full border border-gray-500 bg-gray-400 rounded-xl">
          <form onSubmit={handleUpdate} className="text-left mx-auto ">
            <div className="bold w-full mt-4 ">
              <label className="block mb-2">Enter Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-md bg-white w-full h-8 pl-3"
                value={editData.name}
                onChange={(e) => {
                  seteditData({ ...editData, name: e.target.value });
                }}
              />
            </div>
            <div className="bold w-full mt-4 ">
              <label htmlFor="text" className="block mb-2">
                Product
              </label>
              <input
                type="text"
                id="text"
                placeholder="Enter Product"
                className="rounded-md bg-white w-full h-8 pl-3"
                onChange={(e) =>
                  seteditData({ ...editData, product: e.target.value })
                }
                value={editData.product}
              />
            </div>
            <div className="bold w-full mt-4 ">
              <label htmlFor="Price" className="block mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter Price"
                className="rounded-md bg-white w-full h-8 pl-3"
                onChange={(e) =>
                  seteditData({ ...editData, price: e.target.value })
                }
                value={editData.price}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ExpenseEditForm;
