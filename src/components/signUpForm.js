import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/input";
import RadioInput from "../common/radioInput";

const SignUpForm = () => {
  const inputs = [
    { type: "name", inputType: "text" },
    { type: "email", inputType: "email" },
    { type: "password", inputType: "password" },
    { type: "repass", inputType: "password" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repass: "",
      gender: "male",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string()
        .email("invalid email format")
        .required("email is required"),
      password: Yup.string()
        .min(8, "at least 8 characters")
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, "at least 1 number or special char")
        .required("password is required"),
      repass: Yup.string()
        .oneOf([Yup.ref("password"), null], "passwords must match")
        .required("password confirm is required"),
      gender: Yup.string().required("gender is required"),
    }),
    validateOnMount: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-yellow-100 w-96 m-auto mt-10 flex flex-col gap-y-9 p-5 rounded-lg"
    >
      <h2 className="text-4xl">SignForm</h2>

      {inputs.map((input, index) => (
        <Input
          key={index}
          formik={formik}
          type={input.type}
          inputType={input.inputType}
        />
      ))}

      <RadioInput formik={formik} name="gender" />

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
