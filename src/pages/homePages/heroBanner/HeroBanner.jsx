import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { nitish } from "../../../assets";

function HeroBanner() {
  return (
    <div className=" text-white  py-20">
      <ContentWrapper>
        <div className="flex flex-col-reverse smm:flex-row gap-5">
          <div className="flex  flex-col items-center smm:items-start smm:w-[48%]">
            <div className="text-2xl sm:text-3xl smm:text-4xl flex flex-col gap-8 sm:gap-12 py-5 font-Poppins">
              <h1 className="text-center smm:text-start">Hi, I am</h1>
              <h1>Nitish Raj</h1>
            </div>
            <div className="text-2xl py-5">
              {/* <h2>I love Codi</h2> */}
              <p>
                <img
                  className="hidden ss:block"
                  src="https://readme-typing-svg.herokuapp.com?font=Libre+Baskerville&size=30&pause=1000&center=false&vCenter=true&width=450&height=70&lines=I+Love+Coding;Full+Stack+Web+Developer;Loves+To+Build+Projects+;A+Problem+Solver"
                  alt="Typing SVG"
                />
                <img
                  className=" ss:hidden"
                  src="https://readme-typing-svg.herokuapp.com?font=Libre+Baskerville&size=20&pause=1000&center=false&vCenter=true&width=300&height=70&lines=I+Love+Coding;Full+Stack+Web+Developer;Loves+To+Build+Projects+;A+Problem+Solver"
                  alt="Typing SVG"
                />
              </p>
            </div>
            <div className="pb-5">
              <p className="text-xl leading-10 text-gray-500">
                I am a motivated and versatile individual, always eager to take
                on new challenges. With a passion for learning I am dedicated to
                delivering high-quality results. With a positive attitude and a
                growth mindset, I am ready to make a meaningful contribution and
                achieve great things.
              </p>
            </div>
            <div className="py-5 w-full text-center ">
              <button className="font-medium button-style text-white capitalize px-6 py-3 text-2xl font-mono tracking-wide rounded-xl border-none">
                check resume
              </button>
            </div>
          </div>
          <div className="flex justify-center  items-center smm:w-[48%]">
            <img
              className="rounded-full h-[300px] w-[300px] ss:h-[400px] ss:w-[400px] bg-center border border-[#854CE6] shadow-md shadow-[#854CE6] ss:shadow-2xl   ss:shadow-[#854CE6]"
              src={nitish}
              alt=""
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
