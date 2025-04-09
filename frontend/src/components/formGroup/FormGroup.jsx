function FormGroup(props) {
  const passValue = (value) => {
    let id = props.label.id;
    props.handleInputChange(id, value);
  };
  return (
    <div className="bold w-full mt-4 ">
      <label htmlFor={props.label.id} className="block mb-2">
        {props.label.text}
      </label>
      <input
        type={props.input.type}
        placeholder={props.input.placeholder}
        id={props.input.id}
        className="rounded-md bg-white w-full h-8 pl-3"
        onChange={(e) => passValue(e.target.value)}
        value={props.input.value}
      />
    </div>
  );
}

export default FormGroup;
