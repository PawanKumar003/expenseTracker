import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Expensetable from "./components/table/Expensetable";
import ExpenseEditForm from "./components/form/ExpenseEditForm";
import FormCompenent from "./components/form/FormCompenent";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

const formInputs = [
  {
    label: {
      id: "name",
      text: "Enter Name",
    },
    input: {
      type: "text",
      placeholder: "Enter Name",
      value: "",
    },
  },
  {
    label: {
      id: "prduct",
      text: "prduct Name",
    },
    input: {
      type: "text",
      placeholder: "Enter Product Name",
      value: "",
    },
  },
  {
    label: {
      id: "price",
      text: "Price",
    },
    input: {
      type: "number",
      placeholder: "Enter Price",
      value: "",
    },
  },
];

const App = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [editData, seteditData] = useState(null);
  const [formInputData, setFormInputData] = useState(formInputs);

  const handleInputChange = (id, value) => {
    const updatedFormInputData = formInputData.map((formInputs) => {
      if (formInputs.label.id === id) {
        return {
          ...formInputs,
          input: {
            ...formInputs.input,
            value: value,
          },
        };
      }
      return formInputs;
    });
    setFormInputData(updatedFormInputData);

    // setName(formInputData[0].input.value);
    // setProduct(formInputData[1].input.value);
    // setPrice(formInputData[2].input.value);
  };

  const handelOnsubmit = (event) => {
    event.preventDefault();
    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: formInputData[0].input.value,
        product: formInputData[1].input.value,
        price: formInputData[2].input.value,
      },
    ]);

    setFormInputData(formInputs); //reset after submit form
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updateData = data.map((item) =>
      item.id === editData.id ? editData : item
    );
    setData(updateData);
    // setData(data.map((item) => (item.id === editData.id ? editData : item)));
    seteditData(null);
  };

  const deleteHandle = (i) => {
    const newData = [...data];
    newData.splice(i, 1);
    setData(newData);
  };

  const handleEdit = (id) => {
    let item;
    for (const dataItem of data) {
      if (dataItem.id === id) {
        item = dataItem;
        break;
      }
    }
    seteditData(item);

    // item ko state me add krna h
    //editform me pass krwana h
    //editform ke submit funiction banega alag se
    //main data ko update krna h
  };

  return (
    <>
      <Header />

      <div className="flex w-[100%] relative">
        <Sidebar />
        <div className="w-full h-full">
          {/* <ExpenseForm
            handelOnsubmit={handelOnsubmit}
            name={setName}
            product={setProduct}
            price={setPrice}
            na={name}
            pr={price}
            pro={product}
          /> */}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {location.pathname !== "/login" && location.pathname !== "/signup" ? (
            <FormCompenent
              formInputData={formInputData}
              handelOnsubmit={handelOnsubmit}
              handleInputChange={handleInputChange}
            />
          ) : null}

          {editData ? (
            <ExpenseEditForm
              handleUpdate={handleUpdate}
              seteditData={seteditData}
              editData={editData}
            />
          ) : null}

          {() => {
            if (
              location.pathname !== "/login" &&
              location.pathname !== "/signup"
            ) {
              if (data.length === 0) {
                return (
                  <div className="text-lg3 bold text-center p-4 border border-indigo-600 m-3">
                    NO Data
                  </div>
                );
              } else {
                return (
                  <Expensetable
                    data={data}
                    deleteHandle={deleteHandle}
                    handleEdit={handleEdit}
                  />
                );
              }
            }
          }}

          {/* {data.length === 0 ? (
            <div className="text-lg3 bold text-center p-4 border border-indigo-600 m-3">
              NO Data
            </div>
          ) : (
            <Expensetable
              data={data}
              deleteHandle={deleteHandle}
              handleEdit={handleEdit}
            />
          )} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
