import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SubjectTile = () => {
  const sub = useSelector((state) => state.sub);

  const renderedSub = sub.map((item) => (
    <NavLink
      to={`/post/${item.id}`}
      key={item.id}
      className="h-[15rem] w-[15rem] cursor-pointer flex flex-col p-4 rounded-[10px] bg-blue-200 items-center justify-center text-center"
    >
      <span className="mb-3">{item.icon}</span>
      <h2 className="text-2xl font-bold">{item.title}</h2>
      <p className="mt-4 text-xs font-semibold">
        {item.info.substring(0, 60)}...
      </p>
    </NavLink>
  ));
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Subject Tiles</h2>
      <div className="flex lg:flex-row flex-col gap-3 lg:ml-28 ml-12 mt-6">
        {renderedSub}
      </div>
    </div>
  );
};

export default SubjectTile;
