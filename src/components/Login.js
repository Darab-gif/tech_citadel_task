import React from "react";
import { useDispatch } from "react-redux";
import { logAction } from "../redux/authLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const addLogin = (ev) => {
    ev.preventDefault();
    dispatch(logAction.login());
  };
  return (
    <div className="">
      <div className="absolute left-[50%] top-[50%] lg:h-[30rem] lg:w-[30rem] w-[20rem]  rounded-[15px] translate-x-[-50%] translate-y-[-50%] shadow-main">
        <h1 className="text-center text-[20px] font-[500] text-gray-800 pt-[50px]">
          WELCOME BACK!
        </h1>
        <h2 className="text-center text-[18px] font-[500] text-blue-400">
          LOGIN HERE
        </h2>
        <form action="" onSubmit={addLogin} className="mt-10">
          <label htmlFor="email" className="ml-[30px] pt-8 font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            className="border-2 border-blue-300 w-[80%] py-3 px-1 rounded-[5px] ml-[30px]  input"
          />
          <label htmlFor="pswd" className="ml-[30px] font-semibold">
            Password
          </label>
          <input
            type="password"
            name="pswd"
            required
            id="pswd"
            className="border-2 border-blue-300 w-[80%] py-3 px-1 rounded-[5px] ml-[30px] input"
          />
          <div className="ml-[30px] pt-[5px]">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check" className="ml-[4px]">
              <span className="font-bold">Remember me</span>
            </label>
          </div>

          {/* <a href="/" className="underline text-blue-500 ml-[30px] pt-[5px]">
            Forgot your password
  </a>*/}
          <br />
          <Link to="/home">
            {" "}
            <input
              type="submit"
              value="LOG IN"
              className=" p-4 lg:mt-3 mb-5 lg:ml-[13rem] ml-[8rem] cursor-pointer bg-blue-500 text-white rounded-xl"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
