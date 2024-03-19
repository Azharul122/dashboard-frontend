import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateJob = () => {
  const nevigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(data);
    try {
      await axios
        .post("https://dashboard-backend-woad.vercel.app/job", data)
        .then((res) => {
          console.log(res?.data?.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registrion success",
              showConfirmButton: false,
              timer: 2500,
            });
            nevigate("/");
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Internal error",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative pt-7">
      <div className="flex justify-center items-center  h-full">
        <div className="">
          <p className="title">Create new job</p>
          <div className="w-[600px] shadow-lg px-5 py-5 border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center w-full gap-3 ">
                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Job title</span>
                  </label>
                  <input
                    type="text"
                    {...register("jobTitle", { required: true })}
                    placeholder="Job title"
                    className="w-full border px-3 rounded py-2 mt-1"
                  />
                  {errors.jobTitle?.type === "required" && (
                    <p className="text-red-600">Email is required</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Salary</span>
                  </label>
                  <input
                    type="number"
                    {...register("salary", { required: true })}
                    placeholder="Salary"
                    className="w-full border px-3 rounded py-2 mt-1"
                  />
                  {errors.salary?.type === "required" && (
                    <p className="text-red-600">Salary is required</p>
                  )}
                </div>
              </div>

              <div className="flex items-center w-full gap-3 mt-3">
                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Job location</span>
                  </label>
                  <select
                    name=""
                    className="w-full border px-2 py-2 outline-none"
                    id=""
                    {...register("jobLocation", { required: true })}
                  >
                    <option value="">Select job location</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On Site</option>
                  </select>
                  {errors.jobLocation?.type === "required" && (
                    <p className="text-red-600">Salary is required</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Job type</span>
                  </label>
                  <select
                    name=""
                    className="w-full border px-2 py-2 outline-none"
                    id=""
                    {...register("jobType", { required: true })}
                  >
                    <option value="">Select job type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="intership">Intern</option>
                  </select>
                  {errors.jobType?.type === "required" && (
                    <p className="text-red-600">Job Type is required</p>
                  )}
                </div>
              </div>

              <div className="flex items-center w-full gap-3 mt-3">
                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Experience</span>
                  </label>
                  <input
                    type="number"
                    {...register("experience", { required: true })}
                    placeholder="Experience"
                    className="w-full border px-3 rounded py-2 mt-1"
                  />
                  {errors.experience?.type === "required" && (
                    <p className="text-red-600">Salary is required</p>
                  )}
                </div>

                <div className="w-full">
                  <label className="label">
                    <span className=" abel-text ">Deadline</span>
                  </label>
                  <input
                    type="date"
                    {...register("deadline", { required: true })}
                    placeholder="Deadline"
                    className="w-full border px-3 rounded py-2 mt-1"
                  />
                  {errors.deadline?.type === "required" && (
                    <p className="text-red-600">Deadline is required</p>
                  )}
                </div>
              </div>

              <div className="mt-3">
                <label className="label">
                  <span className=" abel-text ">About job</span>
                </label>
                <textarea
                  type="text"
                  {...register("aboutJob", { required: true })}
                  placeholder="About Job"
                  className="w-full border px-3 rounded py-2 mt-1"
                />
                {errors.aboutJob?.type === "required" && (
                  <p className="text-red-600">Salary is required</p>
                )}
              </div>
              <div className="mt-3">
                <label className="label">
                  <span className=" abel-text ">About details</span>
                </label>
                <textarea
                  type="text"
                  {...register("jobDetails", { required: true })}
                  placeholder="About details"
                  className="w-full border px-3 rounded py-2 mt-1"
                />
                {errors.jobDetails?.type === "required" && (
                  <p className="text-red-600">Job Details is required</p>
                )}
              </div>

              <button
                className="px-2 py-1 primary-bg rounded mt-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
