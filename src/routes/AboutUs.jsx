import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import courses, { courseImages } from "../data/index.js";
import AboutUs1 from "../assets/AboutUs1.jpeg";

export default function AboutUs() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar currentPage="AboutUs" />
      <div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto mt-20">
        <div className="flex flex-col align-middle my-auto">
          <h1 className="text-[32px] font-sans font-bold text-cYellow">
            About Islam Path
          </h1>

          <div className="mt-5 align-middle">
            <p className="text-cGery text-2xl">
              Islam Path is a modern, authentic online academy dedicated to guiding students of all ages on a meaningful journey with the Qur’an, Arabic language, and Islamic knowledge. We combine traditional scholarship with contemporary teaching methods to provide clear, structured, and engaging learning experiences.
            </p>
          </div>
        </div>

        <img className="bg-cBlack size-[450px] mx-auto xl:mr-0 xl:ml-auto hidden xl:block" src={AboutUs1}></img>
      </div>

      <div className="w-4/5 mx-auto my-20 xl:mb-0 align-middle">
        <div className="flex flex-row align-middle my-auto">
          <h1 className="text-[32px] font-sans font-bold text-cYellow text-right">
            Our Mission
          </h1>

          <div className="bg-cYellow h-auto w-2 mx-2"></div>

          <div className="align-middle">
            <p className="text-cGery text-2xl">
              To make high-quality Qur’anic and Islamic education accessible to learners worldwide — preserving authenticity while using modern pedagogy.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto xl:mt-20">
        <img className="bg-cBlack size-[450px] mx-auto xl:ml-0 xl:mr-auto xl:row-start-1 xl:col-start-1 row-start-2 col-start-1 hidden xl:block"></img>


        <div className="flex flex-col align-middle my-auto xl:row-start-1 xl:col-start-2 row-start-1 col-start-1">
          <h1 className="text-[32px] font-sans font-bold text-cYellow">
            Our Vision
          </h1>

          <div className="mt-5 align-middle">
            <p className="text-cGery text-2xl">
              A global community of confident reciters, memorisers, and informed Muslims who apply Islamic knowledge in daily life.
            </p>
          </div>
        </div>

      </div>

      <div className=" w-4/5 mx-auto my-20 xl:mb-0 align-middle">
        <div className="flex flex-row align-middle my-auto">
          <h1 className="text-[32px] font-sans font-bold text-cYellow text-right">
            Our Mission
          </h1>

          <div className="bg-cYellow h-auto w-2 mx-2"></div>

          <div className="align-middle">
            <p className="text-cGery text-2xl">
              We use a balanced mix of one-on-one lessons, group practice, structured revision cycles for memorization, interactive exercises for Tajweed, and contextual lessons for Arabic and Islamic sciences.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto xl:mt-20">
        <div className="flex flex-col align-middle my-auto">
          <h1 className="text-[32px] font-sans font-bold text-cYellow">
            Who can join?
          </h1>

          <div className="mt-5 align-middle">
            <p className="text-cGery text-2xl">
              Children, adults, sisters, new learners, and advanced students seeking Ijazah, Qirāʾāt, or scholarly study.
            </p>
          </div>
        </div>

        <img className="bg-cBlack size-[450px] mx-auto xl:mr-0 xl:ml-auto hidden xl:block"></img>
      </div>
      
      <div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto xl:mt-20 my-20">
        <img className="bg-cBlack size-[450px] mx-auto xl:ml-0 xl:mr-auto xl:row-start-1 xl:col-start-1 row-start-2 col-start-1 hidden xl:block"></img>

        <div className="flex flex-col align-middle my-auto xl:row-start-1 xl:col-start-2 row-start-1 col-start-1">
          <h1 className="text-[32px] font-sans font-bold text-cYellow">
            Why Islam Path?
          </h1>

          <div className="mt-5 align-middle">
            <p className="text-cGery text-2xl">
              <ul>
                <li>
                  Certified and experienced teachers with real-world teaching experience.
                </li>
                <li>
                  Flexible scheduling for different time zones and busy lifestyles.
                </li>
                <li>
                  Individualized progress plans and weekly reports to track.
                </li>
                <li>
                  Safe and supportive environment for kids and female learners.
                </li>
                <li>
                  Authentic curriculum rooted in sound sources.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>


      {/* <div className="w-4/5 mx-auto my-20 align-middle">
        <h1 className="text-[38px] font-sans font-bold text-cYellow mb-4 text-center">
          Why Islam Path?
        </h1>
        <div className="flex flex-row align-middle my-auto">
          <div className="grid grid-cols-5 gap-5 w-full bg-cYellow/25 h-[350px] my-auto">
            <div className="w-full h-auto my-auto  border-cYellow border-4 bg-white rounded-4xl align-middle p-5 mx-[-100px]">
              <p className="text-cBlack text-2xl">
                Certified and experienced teachers with real-world teaching experience.
              </p>
            </div>

            <div className="w-full h-auto my-auto  border-cYellow border-4 bg-white rounded-4xl align-middle p-5 mx-[-100px]">
              <p className="text-cBlack text-2xl">
                Flexible scheduling for different time zones and busy lifestyles.
              </p>
            </div>

            <div className="w-full h-auto my-auto  border-cYellow border-4 bg-white rounded-4xl align-middle p-5 mx-[-100px]">
              <p className="text-cBlack text-2xl my-auto">
                Individualized progress plans and weekly reports to track
              </p>
            </div>

            <div className="w-full h-auto my-auto  border-cYellow border-4 bg-white rounded-4xl align-middle p-5 mx-[-100px]">
              <p className="text-cBlack text-2xl">
                Safe and supportive environment for kids and female learners.
              </p>
            </div>

            <div className="w-full h-auto my-auto  border-cYellow border-4 bg-white rounded-4xl align-middle p-5 mx-[-100px]">
              <p className="text-cBlack text-2xl">
                Authentic curriculum rooted in sound sources.
              </p>
            </div>
          </div>

          <div className="w-0 h-0 border-l-250  border-l-cYellow/25 border-t-250 border-t-transparent border-b-250 border-b-transparent"></div>
        </div>
      </div> */}
    </>
  );
}