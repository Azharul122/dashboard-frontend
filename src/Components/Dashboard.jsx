import { RxDashboard } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { IoCalendarNumberOutline, IoLogOut } from "react-icons/io5";
import { FaBagShopping, FaSitemap } from "react-icons/fa6";
import { MdBook, MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TbSitemap } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import logo from "../assets/Screenshot_1.png";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[270px] h-screen  px-4 pb-4 overflow-y-auto">
          <Link className="mt-5" to={"/"}>
            <img className=" mx-auto" src={logo} alt="" />
          </Link>
          <div className="title">Menu</div>
          <div className="">
            <ul>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/"}
              >
                <RxDashboard className="text-lg" />
                Dashboard
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/messages"}
              >
                <CiMail className="text-lg" />
                Message
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/calender"}
              >
                <IoCalendarNumberOutline className="text-lg" />
                Calender
              </NavLink>
            </ul>
          </div>

          <div className="title mt-2">Requirement</div>
          <div className="">
            <ul>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/jobs"}
              >
                <FaBagShopping className="text-lg" />
                Job
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/applications"}
              >
                <MdDashboard className="text-lg" />
                Application
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/career"}
              >
                <TbSitemap className="text-lg" />
                Career site
              </NavLink>
            </ul>
          </div>
          <div className="title mt-2">Organization</div>
          <div className="">
            <ul>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/employee"}
              >
                <FaUserTie className="text-lg" />
                <Link>Employee</Link>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/structure"}
              >
                <FaSitemap className="text-lg" />
                <Link>Structure</Link>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/report"}
              >
                <TbReportSearch className="text-lg" />
                <Link>Report</Link>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/settings"}
              >
                <IoMdSettings className="text-lg" />
                <Link>Settings</Link>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `p-2  flex items-center gap-3 ${isActive ? "primary-bg" : ""}`
                }
                to={"/logout"}
              >
                <IoLogOut className="text-lg" />
                <Link>Logout</Link>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="dynamic-content w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
