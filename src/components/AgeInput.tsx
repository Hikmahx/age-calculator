import React, { useState } from "react";
import arrow from "../assets/icon-arrow.svg";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  day: string;
  month: string;
  year: string;
};

const AgeInput = () => {
  // INPUT VALUES (SO I CAN REPLACE ALL NON-DIGITS IN INPUT FIELDS)
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="font-poppins mt-[5px] lg:mt-2 flex items-center justify-between max-w-[300px] lg:max-w-[544px]">
        <div className="flex flex-col relative">
          <label
            htmlFor="day"
            className={
              "uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2 " +
              (errors.day ? "text-red-400" : "text-smokey-grey ")
            }
          >
            day
          </label>
          <input
            type="text"
            id="day"
            maxLength={2}
            className={
              "border rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem] " +
              (errors.day ? "!border-red-400" : "border-light-grey")
            }
            placeholder="DD"
            {...register("day", {
              required: "This field is required",
              max: {
                value: 31,
                message: "Must be a valid day",
              },
              min: {
                value: 1,
                message: "Must be a valid day",
              },
              // REPLACES ALL NON-DIGITS
              onChange: (e) =>
                setInput({
                  ...input,
                  day: e.target.value.replace(/[^0-9 | / | -]/g, ""),
                }),
            })}
            value={input.day}
          />
          {errors.day && (
            <p className="text-xs font-light italic text-red-400 absolute left-0 -bottom-10 lg:-bottom-6">
              {errors.day.message}
            </p>
          )}
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="month"
            className={
              "uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2 " +
              (errors.month ? "text-red-400" : "text-smokey-grey ")
            }
          >
            month
          </label>
          <input
            type="text"
            id="month"
            maxLength={2}
            className={
              "border rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem] " +
              (errors.month ? "!border-red-400" : "border-light-grey")
            }
            placeholder="MM"
            {...register("month", {
              required: "This field is required",
              max: {
                value: 12,
                message: "Must be a valid month",
              },
              min: {
                value: 1,
                message: "Must be a valid month",
              },
              // REPLACES ALL NON-DIGITS
              onChange: (e) =>
                setInput({
                  ...input,
                  month: e.target.value.replace(/[^0-9 | / | -]/g, ""),
                }),
            })}
            value={input.month}
          />
          {errors.month && (
            <p className="text-xs font-light italic text-red-400 absolute left-0 -bottom-10 lg:-bottom-6">
              {errors.month.message}
            </p>
          )}
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="year"
            className={
              "uppercase font-poppins text-xs lg:text-sm tracking-[0.25em] mb-[5px] lg:mb-2 " +
              (errors.year ? "text-red-400" : "text-smokey-grey ")
            }
          >
            year
          </label>
          <input
            type="text"
            maxLength={4}
            id="year"
            className={
              "border rounded-md text-off-black placeholder-smokey-grey focus:outline-none focus:border-purple w-[88px] lg:w-40 h-[54px] lg:h-[72px] px-3.5 lg:px-6 text-xl lg:text-[2rem] " +
              (errors.year ? "!border-red-400" : "border-light-grey")
            }
            placeholder="YYYY"
            {...register("year", {
              required: "This field is required",
              max: {
                // THE CURRENT YEAR IS THE MAX YEAR
                value: new Date().getFullYear(),
                message: "Must be in the past",
              },
              min: {
                value: 1900,
                message: "Must be a valid year",
              },
              // REPLACES ALL NON-DIGITS
              onChange: (e) =>
                setInput({
                  ...input,
                  year: e.target.value.replace(/[^0-9 | / | -]/g, ""),
                }),
            })}
            value={input.year}
          />
          {errors.year && (
            <p className="text-xs font-light italic text-red-400 absolute left-0 -bottom-10 lg:-bottom-6">
              {errors.year.message}
            </p>
          )}
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
