// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AgeResult = () => {
  const { ageDay, ageMonth, ageYear } = useSelector(
    (state: RootState) => state.age
  );

  return (
    <div className="mt-16 lg:mt-12 text-[54px] lg:text-[104px] lg:tracking-tight leading-[1.07] italic font-extrabold text-off-black whitespace-nowrap">
      <div className="years">
        <span className="years-result text-purple">
          {ageYear > 0 ? ageYear : " - - "}{" "}
        </span>{" "}
        <span className="-ml-1">years</span>
      </div>
      <div className="months">
        <span className="months-result text-purple">
          {ageMonth > 0 ? ageMonth : " - - "}{" "}
        </span>{" "}
        <span className="-ml-1">months</span>
      </div>
      <div className="days">
        <span className="days-result text-purple">
          {ageDay > 0 ? ageDay : " - - "}{" "}
        </span>{" "}
        <span className="-ml-1">days</span>
      </div>
    </div>
  );
};

export default AgeResult;
