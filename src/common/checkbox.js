const CheckBox = ({ formik, name, checkBoxs }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex gap-x-9 items-center">
        {checkBoxs.map((check) => (
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              name={name}
              value={check.value}
              id={check.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor={check.value}>{check.value}</label>
          </div>
        ))}
      </div>
      {
        <div
          className={`text-red-600 text-sm h-1.5 ${
            formik.errors[name] && formik.touched[name] ? "" : "opacity-0"
          }`}
        >
          {formik.errors[name]}
        </div>
      }
    </div>
  );
};

export default CheckBox;
