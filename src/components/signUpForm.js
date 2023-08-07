import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", pass: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "name is required!";
      if (!values.email) errors.email = "email is required!";
      if (!values.pass) errors.pass = "password is required!";
      return errors;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-yellow-100 w-96 m-auto mt-10 flex flex-col gap-y-9 p-5 rounded-lg"
    >
      <h2 className="text-4xl">SignForm</h2>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <label className="basis-1/4">Name</label>
          <input
            className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
            placeholder="name"
            type="text"
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {
          <div
            className={`text-red-600 text-sm h-1.5 ${
              formik.errors.name && formik.touched.name ? "" : "opacity-0"
            }`}
          >
            {formik.errors.name}
          </div>
        }
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <label className="basis-1/4">Email</label>
          <input
            className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
            placeholder="Email"
            type="email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {
          <div
            className={`text-red-600 text-sm h-1.5 ${
              formik.errors.email && formik.touched.email ? "" : "opacity-0"
            }`}
          >
            {formik.errors.email}
          </div>
        }
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between">
          <label className="basis-1/4">password</label>
          <input
            className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
            placeholder="password"
            type="password"
            value={formik.values.pass}
            name="pass"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {
          <div
            className={`text-red-600 text-sm h-1.5 ${
              formik.errors.pass && formik.touched.pass ? "" : "opacity-0"
            }`}
          >
            {formik.errors.pass}
          </div>
        }
      </div>
      <button
        type="submit"
        className="bg-yellow-400 py-2 rounded-xl text-white text-xl"
      >
        submit
      </button>
    </form>
  );
};

export default SignUpForm;
