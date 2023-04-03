import React from "react";

const AgeResult = () => {
  return (
    <div className="mt-16 lg:mt-12 text-[54px] lg:text-[104px] lg:tracking-tight leading-[1.07] italic font-extrabold text-off-black whitespace-nowrap">
      <div className="years">
        <span className="years-result text-purple"> - - </span>
        <span className="-ml-1">years</span>
      </div>
      <div className="months">
        <span className="months-result text-purple"> - - </span>
        <span className="-ml-1">months</span>
      </div>
      <div className="days">
        <span className="days-result text-purple"> - - </span>
        <span className="-ml-1">days</span>
      </div>
    </div>
  );
};

export default AgeResult;
