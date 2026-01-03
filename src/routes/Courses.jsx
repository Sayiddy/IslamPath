import { AiFillInstagram, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill, BsYoutube } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { useEffect } from "react"
import NavBar from "../components/NavBar"
import bbr from "../assets/bbr.png";
import mbbr from "../assets/mbbr.png";
import { Link } from 'react-router-dom';

export default function Courses() {
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
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          All
        </Link>
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Quran Recitation
        </Link>
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Quran Memorization
        </Link>
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Quran With Tajweed
        </Link>
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Arabic Language
        </Link>
        <Link to="" className='flex flex-col h-[46px] px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Islamic Studies
        </Link>
      </div>

      <div className='flex flex-col justify-center mb-[82px] gap-15'>
        <div className="flex flex-col gap-5">
          <div className='flex flex-col justify-center gap-4'>
            <div className="grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-fit justify-center items-center gap-10 mx-auto">
              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-4'>
            <div className="grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-fit justify-center items-center gap-10 mx-auto">
              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[325px] h-fit">
                <div className='bg-cBlack size-[325px] m-[-32px] rounded-t-2xl'>
                </div>
                <h1 className="flex font-bold font-sans text-[18px] text-cBlack justify-center leading-none pt-[50px]">Quran Recitation for kids</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">Course for kids to perfect their Quran recitation.</h1>  
                </div>
                <Link to="/trial-class" className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Course Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}