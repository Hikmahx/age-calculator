import React from "react";

const AgeInput = () => {
  return (
    <form className="font-poppins mt-[5px] flex items-center justify-between max-w-[300px]">
      <div className="flex flex-col">
        <label
          htmlFor="day"
          className="text-smokey-grey uppercase font-poppins text-xs tracking-[0.25em] mb-1"
        >
          day
        </label>
        <input
          type="text"
          id="day"
          className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] h-[54px] px-3.5 text-xl"
          placeholder="DD"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="month"
          className="text-smokey-grey uppercase font-poppins text-xs tracking-[0.25em] mb-1"
        >
          month
        </label>
        <input
          type="text"
          id="month"
          className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] h-[54px] px-3.5 text-xl"
          placeholder="MM"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="year"
          className="text-smokey-grey uppercase font-poppins text-xs tracking-[0.25em] mb-1"
        >
          year
        </label>
        <input
          type="text"
          id="year"
          className="border border-light-grey rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] h-[54px] px-3.5 text-xl"
          placeholder="YYYY"
        />
      </div>
    </form>
  );
};

export default AgeInput;
