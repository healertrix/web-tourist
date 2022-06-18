import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-navblue ">
      <div className="flex-1">
        <a className="">
          <Image
            width="90%"
            height="90%"
            // className="h-10 w-10"
            src="/images/state_logo.png"
            alt="logo"
          ></Image>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
