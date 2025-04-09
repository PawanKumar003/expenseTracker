import FormGroup from "../FormGroup/FormGroup";

function FormCompenent(props) {
  const { formInputData, handleInputChange } = props;
  return (
    <section className="rounded-xl expense-tracker-section w-1/2 h-full mt-4 p-3 text-center text-black mx-auto border border-gray-300 bg-gray-200">
      <div className="container-fluid px-5">
        <div className="expense-tracker-heading">
          <h1 className="text-4xl bold">{props.title}</h1>
        </div>
        <div className="m-auto p-5 mt-4 mx-auto w-full border border-gray-500 bg-gray-400 rounded-xl">
          <form onSubmit={props.handelOnsubmit} className="text-left mx-auto ">
            <div>
              {formInputData.map((formInput) => (
                <FormGroup
                  label={formInput.label}
                  input={formInput.input}
                  key={formInput.label.id}
                  handleInputChange={handleInputChange}
                />
              ))}
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormCompenent;
