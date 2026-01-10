import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoR from '../assets/logoR.png';
import Btn from './Btn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import SideBar from './SideBar';

export default function NavBar({ currentPage }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      {sideBarOpen && <SideBar setSideBarOpen={setSideBarOpen}/>}
      <div className="w-full h-[100px] bg-white align-middle sticky top-0 shadow-md flex items-center z-30">
        <GiHamburgerMenu onClick={() => setSideBarOpen(!sideBarOpen)} className="xl:hidden block size-12 bg-transparent outline-cYellow outline-3 hover:bg-cBronze hover:outline-none hover:text-white text-cBlack text-center p-2 ml-[30px] rounded-[15px] transition-all duration-300 align-middle shrink-0"/>
        
        <img src={logoR} alt="Islam Path Logo" className="h-[50px] m-[25px] ml-[50px] sm-auto"/>
        <div className='xl:grid hidden grid-rows-1 grid-flow-col gap-10 m-[25px]'>
          <Link to="/" className={'text-[18px] ' + (currentPage === "Home" ? "text-cYellow" : " hover:text-cYellow")}>Home</Link>
          <Link to="/about-us" className={'text-[18px] ' + (currentPage === "About Us" ? "text-cYellow" : " hover:text-cYellow")}>About Us</Link>
          <Link to="/courses" className={'text-[18px] ' + (currentPage === "Courses" ? "text-cYellow" : " hover:text-cYellow")}>Courses</Link>
          <div to="/tutors" className={'text-[18px] ' + (currentPage === "Tutors" ? "text-cYellow" : " hover:text-cYellow")}>Tutors</div>
          <Link to="/contact-us" className={'text-[18px] ' + (currentPage === "Contact Us" ? "text-cYellow" : " hover:text-cYellow")}>Contact Us</Link>
          <Link to="/pricing" className={'text-[18px] ' + (currentPage === "Pricing" ? "text-cYellow" : " hover:text-cYellow")}>Pricing</Link>
          <div to="/blog" className={'text-[18px] ' + (currentPage === "Blog" ? "text-cYellow" : " hover:text-cYellow")}>Blog</div>
        </div>
        <Btn className="ml-auto mr-5 sm:mr-12 text-sm sm:text-[18px] px-2! py-2! sm:px-7! sm:py-2.5!">Book Trial Class</Btn>
      </div>
    </>
  );
}