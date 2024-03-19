import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useCandidates from "../Hooks/useCandidates";
import useShortlistedCandidates from "../Hooks/useShortlistedCandidates";
import useRejectedCandidates from "../Hooks/useRejectedCandidates";
import { FaEdit, FaFilter, FaSearch, FaTrash } from "react-icons/fa";

const Application = () => {
  const { shortlistedCandidates } = useShortlistedCandidates();
  const { rejectedCandidates } = useRejectedCandidates();
  const [letestJobs, setLetestJobs] = useState([]);
  const { candidates } = useCandidates();
  const [filterCandidates, setFilterCandidates] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (candidates.length > 0) {
      setFilterCandidates(candidates);
    }
  }, [candidates]);
  console.log(filterCandidates);
  useEffect(() => {
    axios
      .get("https://dashboard-backend-woad.vercel.app/jobs/most-recent")
      .then((res) => {
        setLetestJobs(res.data);
      });
  }, []);

  const handleClick = (data) => {
    if (data == "all") {
      setFilterCandidates(candidates);
      setActive(data);
    }
    if (data == "shortlisted") {
      setFilterCandidates(shortlistedCandidates.shortlistedCandidates);
      setActive(data);
    }
    if (data == "rejected") {
      setFilterCandidates(rejectedCandidates.shortlistedCandidates);
      setActive(data);
    }
  };
  return (
    <div className="pt-10 px-5">
      <div className="title">Applications</div>
      <p>On going reqcruitment</p>
      <div className="flex justify-between items-center">
        <select
          className="p-2 border w-[200px] outline-none mt-1 secondary-bg"
          name=""
          id=""
        >
          {letestJobs?.map((lj) => (
            <option key={lj._id} value={lj.jobTitle}>
              {lj.jobTitle}
            </option>
          ))}
        </select>
        <div className="flex items-center justify-center">
          <Link
            to={"/new-application"}
            className="primary-bg px-3 py-1  rounded"
          >
            Create new Application +
          </Link>
        </div>
      </div>

      <section className="filter-section py-8">
        <div className="">
          <div className="flex justify-between items-center h-[60px] shadow-lg px-3">
            <div className="flex items-center gap-3 h-full justify-center">
              <p
                className={`${
                  active == "all" ? "border-b-2 border-[#11998e]" : ""
                } cursor-pointer`}
                onClick={() => handleClick("all")}
              >
                All ({candidates?.length})
              </p>
              <p
                className={`${
                  active == "shortlisted" ? "border-b-2 border-[#11998e]" : ""
                } cursor-pointer`}
                onClick={() => handleClick("shortlisted")}
              >
                Shortlisted ({shortlistedCandidates?.totalSortlistedCandidates})
              </p>
              <p
                className={`${
                  active == "rejected" ? "border-b-2 border-[#11998e]" : ""
                } cursor-pointer`}
                onClick={() => handleClick("rejected")}
              >
                Receted ({rejectedCandidates?.totalSortlistedCandidates})
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaSearch />
                Search
              </div>
              <div className="flex items-center gap-1">
                <FaFilter />
                Filter
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {filterCandidates?.map((candidate) => (
              <div key={candidate._id} className="py-3 px-3 shadow-lg border">
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      className="size-10 rounded-full"
                      src={
                        candidate.imageURl ||
                        "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg"
                      }
                      alt=""
                    />
                    <div className="">
                      <p>{candidate.candidateName}</p>
                      <small>
                        {candidate.salaryExpectesion}k expected |{" "}
                        {candidate.years_of_experience} years exp.
                      </small>
                    </div>
                  </div>

                  <p className="text-center">{candidate.status}</p>
                  <p className="text-center">{candidate.applied_date}</p>

                  <div className="flex items-center justify-end gap-2">
                    <Link to={`/edit-application/${candidate._id}`}>
                      <FaEdit className="cursor-pointer text-[#11998e] text-lg" />
                    </Link>
                    <FaTrash className="cursor-pointer text-red-300 text-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
