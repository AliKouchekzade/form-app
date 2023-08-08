const RadioInput = ({ formik, name, inputsRadio }) => {
  return (
    <div className="flex gap-x-6">
      {inputsRadio.map((input, index) => (
        <div key={index} className="flex items-center gap-x-1">
          <input
            type="radio"
            name={name}
            id={input.value}
            value={input.value}
            onChange={formik.handleChange}
            defaultChecked={input.def}
          />
          <label htmlFor={input.value}>{input.value}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
