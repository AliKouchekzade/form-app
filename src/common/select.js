const Select = ({ formik, name, selectOptions }) => {
  return (
    <div className="flex-col gap-y-1" {...formik.getFieldProps("time")}>
      <div className="flex justify-between items-center">
        <label>select when you want to come</label>
        <select
          name={name}
          className="px-8 py-1.5 text-lg outline-yellow-400 rounded-lg"
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {
        <div
          className={`text-red-600 text-sm flex justify-end h-1.5 ${
            formik.errors[name] && formik.touched[name] ? "" : "opacity-0"
          }`}
        >
          {formik.errors[name]}
        </div>
      }
    </div>
  );
};

export default Select;
