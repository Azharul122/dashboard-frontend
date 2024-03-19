import axios from "axios";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditApplication = () => {
  const { id } = useParams();

  const nevigate = useNavigate();
  const [letestJobs, setLetestJobs] = useState([]);
  console.log(letestJobs);
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
      status: "progress" || data.status,
    };
    try {
      await axios
        .put(`http://localhost:5000/candidates/${id}`, appliacationData)
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
  const [application, setApplication] = useState(null);
  const candidateName = application?.candidateName;
  const applied_date = application?.applied_date;
  const salaryExpectesion = application?.salaryExpectesion;
  const years_of_experience = application?.years_of_experience;
  const gender = application?.gender;
  const jobTitle = application?.jobTitle;
  const imageURl = application?.imageURl;
  const status = application?.status;

  useEffect(() => {
    axios.get(`http://localhost:5000/candidates/${id}`).then((res) => {
      setApplication(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/most-recent`).then((res) => {
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
                      {...register("candidateName")}
                      placeholder="Candiadate Name"
                      className="w-full border px-3 rounded py-2 mt-1"
                      defaultValue={candidateName}
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
                        <option
                          key={lj._id}
                          selected={jobTitle === lj.jobTitle}
                          value={lj.jobTitle}
                        >
                          {lj.jobTitle}
                        </option>
                      ))}
                    </select>
                    {errors.jobLocation?.type === "required" && (
                      <p className="text-red-600">Salary is required</p>
                    )}
                  </div>
                  {/* <div className="w-full">
                    <label className="label">
                      <span className=" abel-text ">Gender</span>
                    </label>
                    <select
                      name=""
                      className="w-full border px-2 py-2 outline-none"
                      id=""
                      {...register("gender", { required: true })}
                    >
                      <option selected={jobTitle === lj.jobTitle} value="">{}</option>
                     
                    </select>
                    {errors.gender?.type === "required" && (
                      <p className="text-red-600">Gender is required</p>
                    )}
                  </div> */}
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
                      defaultValue={years_of_experience}
                    />
                    {errors.years_of_experience?.type === "required" && (
                      <p className="text-red-600">Experience is required</p>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <label className="label">
                    <span className=" abel-text ">Salary expectation</span>
                  </label>
                  <input
                    type="text"
                    {...register("salaryExpectesion")}
                    placeholder="Salary expectation"
                    className="w-full border px-3 rounded py-2 mt-1"
                    defaultValue={salaryExpectesion}
                  />
                  {errors.salaryExpectesion?.type === "required" && (
                    <p className="text-red-600">
                      Salary expectation is required
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <label className="label">
                    <span className=" abel-text ">Job status</span>
                  </label>
                  <select
                    name=""
                    className="w-full border px-2 py-2 outline-none"
                    id=""
                    {...register("status")}
                  >
                    <option value="">Select job</option>

                    <option selected={status === "progress"} value="progress">
                      Progress
                    </option>
                    <option
                      selected={status === "shortlisted"}
                      value="shortlisted"
                    >
                      Shortlisted
                    </option>
                    <option selected={status === "rejected"} value="rejected">
                      rejected
                    </option>
                    <option selected={status === "onHold"} value="onHold">
                      On hold
                    </option>
                  </select>
                  {errors.status?.type === "required" && (
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

export default EditApplication;
