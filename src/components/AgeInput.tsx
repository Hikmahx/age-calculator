import React from "react";
import arrow from "../assets/icon-arrow.svg";

const AgeInput = () => {
  return (
    <form>
      <div className="font-poppins mt-[5px] lg:mt-2 flex items-center justify-between max-w-[300px] lg:max-w-[544px]">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="text-smokey-grey uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2"
          >
            day
          </label>
          <input
            type="text"
            id="day"
            className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem]"
            placeholder="DD"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className="text-smokey-grey uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2"
          >
            month
          </label>
          <input
            type="text"
            id="month"
            className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem]"
            placeholder="MM"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="year"
            className="text-smokey-grey uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2"
          >
            year
          </label>
          <input
            type="text"
            id="year"
            className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem]"
            placeholder="YYYY"
          />
        </div>
      </div>
      <div className="divider border-b border-light-grey py-8 lg:py-6 relative">
        <button
          type="submit"
          className="absolute w-16 lg:w-24 h-16 lg:h-24 rounded-full bg-purple hover:bg-off-black transition-all inset-x-0 lg:top-0 lg:left-auto mx-auto flex p-5 lg:p-6"
        >
          <img src={arrow} alt="down arrow" className="" />
        </button>
      </div>
    </form>
  );
};

export default AgeInput;
