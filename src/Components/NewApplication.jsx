import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewApplication = () => {
  const nevigate = useNavigate();
  const [letestJobs, setLetestJobs] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, event) => {
    event.preventDefault();
    const appliacationData = {
      candidateName: data.candidateName,
      imageURl: data.imageURl,
      jobTitle: data.jobTitle,
      gender: data.gender,
      applied_date: data.applied_date,
      years_of_experience: data.years_of_experience || 0,
      salaryExpectesion: data.salaryExpectesion,
      status: "progress",
    };
    try {
      await axios
        .post(
          "https://dashboard-backend-woad.vercel.app/candidate",
          appliacationData
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registrion success",
              showConfirmButton: false,
              timer: 2500,
            });
            nevigate("/applications");
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

  useEffect(() => {
    axios
      .get("https://dashboard-backend-woad.vercel.app/jobs/most-recent")
      .then((res) => {
        setLetestJobs(res.data);
      });
  }, []);
  return (
    <div>
      <div className="relative pt-7">
        <div className="flex justify-center items-center  h-full">
          <div className="">
            <p className="title">Create new job</p>
            <div className="w-[600px] shadow-lg px-5 py-5 border">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center w-full gap-3 ">
                  <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Candiadate name</span>
                    </label>
                    <input
                      type="text"
                      {...register("candidateName", { required: true })}
                      placeholder="Candiadate Name"
                      className="w-full border px-3 rounded py-2 mt-1"
                    />
                    {errors.candidateName?.type === "required" && (
                      <p className="text-red-600">Candidate Name is required</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Image URL</span>
                    </label>
                    <input
                      type="text"
                      {...register("imageURl")}
                      placeholder="Image URL"
                      className="w-full border px-3 rounded py-2 mt-1"
                    />
                    {errors.imageURl?.type === "required" && (
                      <p className="text-red-600">Salary is required</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center w-full gap-3 mt-3">
                  <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Job</span>
                    </label>
                    <select
                      name=""
                      className="w-full border px-2 py-2 outline-none"
                      id=""
                      {...register("jobTitle", { required: true })}
                    >
                      <option value="">Select job</option>

                      {letestJobs?.map((lj) => (
                        <option key={lj._id} value={lj.jobTitle}>
                          {lj.jobTitle}
                        </option>
                      ))}
                    </select>
                    {errors.jobLocation?.type === "required" && (
                      <p className="text-red-600">Salary is required</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Gender</span>
                    </label>
                    <select
                      name=""
                      className="w-full border px-2 py-2 outline-none"
                      id=""
                      {...register("gender", { required: true })}
                    >
                      <option value="">Select gendere</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender?.type === "required" && (
                      <p className="text-red-600">Gender is required</p>
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
                      {...register("years_of_experience")}
                      placeholder="Experience"
                      className="w-full border px-3 rounded py-2 mt-1"
                    />
                    {errors.years_of_experience?.type === "required" && (
                      <p className="text-red-600">Experience is required</p>
                    )}
                  </div>

                  <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Applied date</span>
                    </label>
                    <input
                      type="date"
                      {...register("applied_date", { required: true })}
                      placeholder="Applied date"
                      className="w-full border px-3 rounded py-2 mt-1"
                    />
                    {errors.applied_date?.type === "required" && (
                      <p className="text-red-600">Applied date is required</p>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <label className="label">
                    <span className=" abel-text ">Salary expectation</span>
                  </label>
                  <input
                    type="text"
                    {...register("salaryExpectesion", { required: true })}
                    placeholder="Salary expectation"
                    className="w-full border px-3 rounded py-2 mt-1"
                  />
                  {errors.salaryExpectesion?.type === "required" && (
                    <p className="text-red-600">
                      Salary expectation is required
                    </p>
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
    </div>
  );
};

export default NewApplication;
