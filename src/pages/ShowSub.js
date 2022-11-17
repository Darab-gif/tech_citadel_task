import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ShowSub = () => {
  const { postId } = useParams();

  const subject = useSelector((state) =>
    state.sub.find((item) => item.id === postId)
  );
  const subTopic = subject.content.map((item) => (
    <div key={item.id} className="mt-5">
      <ul>
        <h2 className="text-2xl font-bold text-center">{item.title}</h2>
        <p className="text-[16px] lg:font-semibold font-[500] leading-6 tracking-wide">
          {item.info}
        </p>
        <li className="list-disc ml-6 mt-2  text-[16px] font-semibold leading-6 tracking-wide">
          {item.pointOne}
        </li>
        <li className="list-disc ml-6 mt-2 text-[16px] font-semibold leading-6 tracking-wide">
          {item.pointTwo}
        </li>
        <li className="list-disc ml-6 mt-2  text-[16px] font-semibold leading-6 tracking-wide">
          {item.pointThree}
        </li>
      </ul>
    </div>
  ));
  return (
    <div>
      <article className="lg:w-[80%] w-[90%]  shadow-light mt-10 lg:ml-28 ml-5 rounded-[5px] p-5  pt-10 relative">
        <h2 className="text-3xl font-bold text-center">{subject.title}</h2>
        <p className="text-[16px] leading-8 tracking-wide  font-semibold mt-3">
          {subject.info}
        </p>
        <div>{subTopic}</div>
      </article>
    </div>
  );
};

export default ShowSub;
