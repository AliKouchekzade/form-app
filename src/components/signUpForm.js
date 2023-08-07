import { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({ name: "", email: "", pass: "" });

  const inputUserDataHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-yellow-100 w-96 m-auto mt-10 flex flex-col gap-y-10 p-5 rounded-lg"
    >
      <h2 className="text-4xl">SignForm</h2>
      <div className="flex justify-between">
        <label className="basis-1/4">Name</label>
        <input
          className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
          placeholder="name"
          type="text"
          value={userData.name}
          name="name"
          onChange={inputUserDataHandler}
        />
      </div>
      <div className="flex justify-between">
        <label className="basis-1/4">Email</label>
        <input
          className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
          placeholder="Email"
          type="email"
          value={userData.email}
          name="email"
          onChange={inputUserDataHandler}
        />
      </div>
      <div className="flex justify-between">
        <label className="basis-1/4">password</label>
        <input
          className="basis-3/4 w-full rounded-lg px-4 py-1.5 outline-yellow-400"
          placeholder="password"
          type="password"
          value={userData.pass}
          name="pass"
          onChange={inputUserDataHandler}
        />
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
