const Input = ({ formik, type, inputType }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor={type} className="basis-1/4">
          {type}
        </label>
        <input
          id={type}
          className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
          placeholder={type}
          type={inputType}
          name={type}
          {...formik.getFieldProps(type)}
        />
      </div>
      {
        <div
          className={`text-red-600 text-sm h-1.5 ${
            formik.errors[type] && formik.touched[type] ? "" : "opacity-0"
          }`}
        >
          {formik.errors[type]}
        </div>
      }
    </div>
  );
};

export default Input;
