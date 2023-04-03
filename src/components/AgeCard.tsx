import React from "react";
import AgeInput from "./AgeInput";
import arrow from "../assets/icon-arrow.svg";
import AgeResult from "./AgeResult";

const AgeCard = () => {
  return (
    <div className="overflow-hidden bg-white w-full max-w-md lg:max-w-[840px] h-[486px] lg:h-[651px] rounded-[22px] rounded-br-[102px] lg:rounded-br-[200px] mt-2 lg:mt-0 py-11 lg:py-12 px-6 lg:px-14 ">
      <AgeInput />
      <div className="divider border-b border-light-grey py-8 lg:py-6 relative">
        <div className="absolute w-16 lg:w-24 h-16 lg:h-24 rounded-full bg-purple inset-x-0 lg:top-0 lg:left-auto mx-auto flex p-5 lg:p-6">
          <img src={arrow} alt="down arrow" className="" />
        </div>
      </div>
      <AgeResult />
    </div>
  );
};

export default AgeCard;
