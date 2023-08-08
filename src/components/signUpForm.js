import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const inputStyle =
    "basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400";

  const formik = useFormik({
    initialValues: { name: "", email: "", pass: "", repass: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string()
        .email("invalid email format")
        .required("email is required"),
      pass: Yup.string()
        .min(8, "at least 8 characters")
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, "at least 1 number or special char")
        .required("password is required"),
      repass: Yup.string()
        .oneOf([Yup.ref("pass"), null], "passwords must match")
        .required("password confirm is required"),
    }),
    validateOnMount:true
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-yellow-100 w-96 m-auto mt-10 flex flex-col gap-y-9 p-5 rounded-lg"
    >
      <h2 className="text-4xl">SignForm</h2>
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between items-center">
          <label className="basis-1/4">Name</label>
          <input
            className={inputStyle}
            placeholder="name"
            type="text"
            name="name"
            {...formik.getFieldProps("name")}
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
        <div className="flex justify-between items-center">
          <label className="basis-1/4">Email</label>
          <input
            className={inputStyle}
            placeholder="Email"
            type="email"
            name="email"
            /*value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}*/
            {...formik.getFieldProps("email")}
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
        <div className="flex justify-between items-center">
          <label className="basis-1/4">password</label>
          <input
            className={inputStyle}
            placeholder="password"
            type="password"
            name="pass"
            {...formik.getFieldProps("pass")}
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
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between items-center">
          <label className="basis-1/4">re pass</label>
          <input
            className={inputStyle}
            placeholder="repeat password"
            type="password"
            name="repass"
            {...formik.getFieldProps("repass")}
          />
        </div>
        {
          <div
            className={`text-red-600 text-sm h-1.5 ${
              formik.errors.repass && formik.touched.repass ? "" : "opacity-0"
            }`}
          >
            {formik.errors.repass}
          </div>
        }
      </div>
      <button
        type="submit"
        className={`py-2 rounded-xl text-white text-xl ${
          formik.isValid
            ? "bg-yellow-400 cursor-pointer"
            : "bg-yellow-200 cursor-not-allowed"
        }`}
        disabled={!formik.isValid}
      >
        submit
      </button>
    </form>
  );
};

export default SignUpForm;
