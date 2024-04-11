import React from "react";
import { navlinks } from "./context";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { toggleHamburger } from "../../store/navbarSlice";
import { IoClose } from "react-icons/io5";
import ContentWrapper from "../contentWrapper/ContentWrapper";

function Navbar() {
  const hamburgerState = useSelector(
    (state) => state.hamburger?.toggleHamburgerState
  );
  const dispatch = useDispatch();

  const handelOnClickHamburger = () => {
    dispatch(toggleHamburger());
  };

  return (
    <div className="bg-[#090917] ">
      <ContentWrapper>
        <div className=" flex justify-between w-full  py-4 items-center overflow-hidden">
          <div>
            <div className=" flex gap-2 text-xl ss:text-3xl sm:text-2xl md:text-3xl font-mono  text-white ">
              <span className="text-[#854CE6] font-Poppins font-bold ">
                &lt;
              </span>
              <span>Nitish</span>
              <span className="text-[#854CE6] font-Poppins font-bold">/</span>
              <span>Raj</span>
              <span className="text-[#854CE6] font-Poppins font-bold">
                &gt;
              </span>
            </div>
          </div>

          <div className="hidden sm:block">
            <ul className="flex gap-6 md:gap-8 text-white list-none text-lg sm:text-xl cursor-pointer">
              {navlinks.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block">
            <button className="font-medium button-style text-white capitalize px-6 py-2 text-xl font-mono tracking-wide rounded-xl border-none">
              Github
            </button>
          </div>

          <div className="sm:hidden " onClick={handelOnClickHamburger}>
            {hamburgerState ? (
              <IoClose className="text-white text-3xl ss:text-4xl  flex items-center" />
            ) : (
              <RxHamburgerMenu className="text-white text-2xl ss:text-3xl  flex items-center" />
            )}
          </div>
        </div>

        {hamburgerState && (
          <div className=" sm:hidden ">
            <ul className="bg-[#090917]  w-full py-5 absolute bg- flex flex-col px-8 gap-6 md:gap-8 text-white list-none text-lg sm:text-xl cursor-pointer">
              {navlinks.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
              <div className="flex justify-center">
                <button className="font-medium button-style text-white capitalize px-6 py-2 text-xl font-mono tracking-wide rounded-xl border-none">
                  Github
                </button>
              </div>
            </ul>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Navbar;
