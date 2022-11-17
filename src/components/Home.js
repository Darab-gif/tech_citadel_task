import React from "react";
import SubjectTile from "./SubjectTile";
import avatar from "../assest/images.png";
import { useDispatch } from "react-redux";
import { logAction } from "../redux/authLogin";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logAction.logout());
  };
  return (
    <div>
      <div className="w-[80%] lg:h-[230px] h-[20rem]  shadow-light mt-10 lg:ml-28 ml-8 rounded-[5px] p-5 flex lg:flex-row flex-col gap-6 pt-10 relative">
        <img
          src={avatar}
          alt="avatar"
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "100%",
          }}
          className="lg:mt-10"
        />
        <div>
          <h3 className="lg:text-2xl text-xl font-bold">Welcome back, Dapo</h3>
          <h4 className="lg:text-xl text-[16px] font-bold mt-1">
            StudentID: <span className="font-semibold">123k673GHB</span>
          </h4>
          <h2 className="lg:text-xl text-[16px] font-bold mt-1">
            Course: <span className="font-semibold">Frontend Development</span>
          </h2>
        </div>
        <Link to="/">
          {" "}
          <button
            onClick={logout}
            className="bg-red-600 text-white py-2 px-4 rounded-[3px] absolute lg:top-4 bottom-4 right-4 font-bold hover:bg-red-400"
          >
            Logout
          </button>
        </Link>
        <button className="bg-red-600 text-white py-2 px-4 rounded-[3px] absolute bottom-4 lg:left-24 font-bold hover:bg-red-400">
          Edit Profile
        </button>
      </div>
      <SubjectTile />
    </div>
  );
};

export default Home;
