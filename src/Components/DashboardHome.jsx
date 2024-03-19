import React, { useEffect, useState } from "react";
import { FaDotCircle, FaSearch } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaCompass, FaCompassDrafting } from "react-icons/fa6";
import useShortlistedCandidates from "../Hooks/useShortlistedCandidates";
import useCandidates from "../Hooks/useCandidates";
import useTotalCandidates from "../Hooks/useTotalCandiadate";
import useRejectedCandidates from "../Hooks/useRejectedCandidates";
import useCandidatesByGender from "../Hooks/useCandidatesByGender";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { loading, shortlistedCandidates } = useShortlistedCandidates();
  const { candidates } = useCandidates();
  const { totalCandidates } = useTotalCandidates();
  const { rejectedCandidates } = useRejectedCandidates();
  const { maleCandidates, femaleCandidates } = useCandidatesByGender();
  const [letestJobs, setLetestJobs] = useState([]);

  console.log(letestJobs);

  const shortlistedParcentages = Math.ceil(
    (shortlistedCandidates?.totalSortlistedCandidates * 100) /
      totalCandidates?.totalCandidates
  );
  const rejectedParcentages = Math.ceil(
    (rejectedCandidates?.totalSortlistedCandidates * 100) /
      totalCandidates?.totalCandidates
  );
  const maleCandidatesParcentages = Math.ceil(
    (maleCandidates * 100) / totalCandidates?.totalCandidates
  );

  // if (loading) {
  //   return <div className="font-bold">Loading</div>;
  // }

  useEffect(() => {
    axios
      .get("https://dashboard-backend-woad.vercel.app/jobs/most-recent")
      .then((res) => setLetestJobs(res.data));
  }, []);

  //   const {shortlistedCandidates
  // ,    totalSortlistedCandidates}=shortlistedCandidates
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="dashboard-left w-full px-4 py-5">
          {/* top */}
          <div className="flex items-center justify-between">
            <p>Good moorning</p>
            <div className="w-[250px] relative">
              <input
                placeholder="Search"
                type="text"
                className="w-full rounded h-[40px] secondary-bg px-2 outline-none"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 px-4 bg-black h-full flex justify-center items-center rounded">
                <FaSearch className="text-white font-bold" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-3 gap-10 my-10">
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="">
                  <p>Total candidates</p>
                  <p className="text-3xl font-bold">
                    {totalCandidates?.totalCandidates}
                  </p>
                  <p className="text-[#11998e]">+24% inc</p>
                </div>
                {/*  */}
                <div className="">
                  <div className="relative size-16">
                    <svg
                      className="size-full"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 "
                        strokeWidth="2"
                      ></circle>

                      <g className="origin-center -rotate-90 transform">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-[#11998e]"
                          strokeWidth="2"
                          strokeDasharray="100"
                          strokeDashoffset="28"
                        ></circle>
                      </g>
                    </svg>

                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xl font-bold text-[#11998e] dark:text-white">
                        72%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0">
                  <BiDotsHorizontalRounded className="text-lg" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center relative">
              <div className="">
                <p>Sortlisted candidates</p>
                <p className="text-3xl font-bold">
                  {shortlistedCandidates?.totalSortlistedCandidates}
                </p>
                <p className="text-[#e7b860]">+24% inc</p>
              </div>
              {/*  */}
              <div className="relative size-16">
                <svg
                  className="size-full"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 "
                    strokeWidth="2"
                  ></circle>

                  <g className="origin-center -rotate-90 transform">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-[#e7b860]"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset="28"
                    ></circle>
                  </g>
                </svg>

                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <span className="text-center text-xl font-bold text-[#e7b860] dark:text-white">
                    72%
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <BiDotsHorizontalRounded className="text-lg" />
              </div>
            </div>
            <div className="flex justify-between items-center relative">
              <div className="">
                <p>Rejected candidates</p>
                <p className="text-3xl font-bold">
                  {rejectedCandidates?.totalSortlistedCandidates}
                </p>
                <p className="text-[#ff7557]">+24% inc</p>
              </div>
              {/*  */}
              <div className="relative size-16">
                <svg
                  className="size-full"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 "
                    strokeWidth="2"
                  ></circle>

                  <g className="origin-center -rotate-90 transform">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-[#ff7557]"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset="28"
                    ></circle>
                  </g>
                </svg>

                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <span className="text-center text-xl font-bold text-[#ff7557]">
                    72%
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <BiDotsHorizontalRounded className="text-lg" />
              </div>
            </div>
          </div>

          {/* statics */}
          <div className="flex justify-between items-center  ">
            <div className="w-[300px] bg-[#11998e] px-3 py-5">
              <div className="flex items-center justify-between mb-3">
                <p>Applications</p>
                <select name="" id="">
                  <option value="Month">Month</option>
                </select>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <p>Applications</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                  <div
                    className="bg-[#11998e] border-white border h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <p>Sortlisted</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                  <div
                    className="bg-orange-300 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: `${shortlistedParcentages}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <p>Rejected</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                  <div
                    className="bg-red-300 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: `${rejectedParcentages}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <p className="shrink-0">On hold</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <p>Complete</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="title">Application by gender</p>
              <div className="">
                <div className="relative size-32">
                  <svg
                    className="size-full"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-orange-400 "
                      strokeWidth="4"
                    ></circle>

                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-[#11998e]"
                        strokeWidth="4"
                        strokeDasharray="100"
                        strokeDashoffset={100 - maleCandidatesParcentages}
                      ></circle>
                    </g>
                  </svg>

                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="size-20 text-[#8a9b9a] rounded-full flex justify-center items-center shadow-2xl">
                      <FaCompassDrafting />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-1">
                  <FaDotCircle className="text-[#11998e]" />
                  <p>Male</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaDotCircle className="text-orange-400" />
                  <p>Female</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-right w-[400px]  h-screen py-8 px-4">
          <p className="text-center text-lg font-bold">Welcome back XTZ</p>
          <div className="flex items-center justify-center my-10">
            <Link to={"create-job"} className="primary-bg px-3 py-1  rounded">
              Create new job +
            </Link>
          </div>
          <div className="title">
            <p>Recent jobs</p>
          </div>
          {letestJobs?.map((lj) => (
            <div key={lj._id} className="bg-[#B9F2E5] px-2 py-2 mb-2 rounded">
              <div className="flex gap-4 items-center">
                <p className="primary-bg py-2 px-2 rounded">64</p>
                <div className="">
                  <p>{lj.jobTitle}</p>
                  <p>Total application</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
