import React from "react";
import AgeInput from "./AgeInput";

const AgeCard = () => {
  return (
    <div className="bg-white w-full max-w-md lg:max-w-[840px] h-[486px] lg:h-[651px] rounded-[22px] rounded-br-[102px] lg:rounded-br-[200px] mt-2 lg:mt-0 py-11 lg:py-12 px-6 lg:px-14 ">
      <AgeInput />
    </div>
  );
};

export default AgeCard;
