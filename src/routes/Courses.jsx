import NavBar from "../components/NavBar"
import CourseCard from '../components/CourseCard.jsx';
import { useState } from "react";
import courses, { courseImages } from "../data/index.js";

export default function Courses() {
  const [filter, setFilter] = useState('All');
  let courseTypes = [];
  let filteredCourses = [];

  Object.entries(courses).forEach(([key, course]) => {
    if (!courseTypes.includes(course.Type)) {
      courseTypes.push(course.Type);
    }
  });

  if (filter === 'All') {
    Object.entries(courses).forEach(([key, course]) => {
      filteredCourses.push([key, course]);
    });
  }else {
    Object.entries(courses).forEach(([key, course]) => {
      if (course.Type === filter) {
        filteredCourses.push([key, course]);
      }
    });
  }

  return (
    <>
      <NavBar currentPage="Courses"/>
      {/* <img src={bbr} alt="" className="hidden lg:block absolute right-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <img src={mbbr} alt="" className="hidden lg:block absolute left-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/> */}

      <div className="grid grid-cols-1 gap-4 pt-[82px] pb-16">
        <h1 className="text-4xl font-sans text-center font-bold text-cYellow">Islam Path Courses </h1>
        <p className="text-[18px] font-sans text-center text-cGery mx-5">Explore the wide range of Quran, Islamic, Arabic courses for both kids and adults</p>
      </div>

      <div className='flex mx-auto justify-center mb-10 gap-4'>
        <button className={'flex h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300' + (filter === 'All' ? ' border-cYellow border-3! bg-white! text-cBlack! font-normal! hover:scale-100!' : '')} onClick={() => setFilter('All')}>
          All
        </button>
        {courseTypes.map((type) => (
          <button key={type} className={'flex h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300' + (filter === type ? ' border-cYellow border-3! bg-white! text-cBlack! font-normal! hover:scale-100!' : '')} onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>

      <div className='grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-fit h-fit justify-center items-center gap-10 mx-auto mb-[82px]'>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} title={course[1].Title} subtitle={course[1].Subtitle} URL={course[0]} image={courseImages[course[0]]}/>
        ))}
      </div>
    </>
  )
}