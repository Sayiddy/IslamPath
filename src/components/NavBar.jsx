import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoR from '../assets/logoR.png';
import Btn from './Btn';

export default function NavBar({ currentPage }) {
  return (
    <div className="w-full h-[100px] bg-white align-middle sticky top-0 shadow-md flex items-center">
      <img src={logoR} alt="Islam Path Logo" className="h-[50px] m-[25px] ml-[50px] mr-auto"/>
      <div className='grid grid-rows-1 grid-flow-col gap-10 m-[25px]'>
        <Link to="/" className={'text-[18px] ' + (currentPage === "Home" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Home</Link>
        <Link to="/about-us" className={'text-[18px] ' + (currentPage === "About Us" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>About Us</Link>
        <Link to="/courses" className={'text-[18px] ' + (currentPage === "Courses" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Courses</Link>
        <Link to="/tutors" className={'text-[18px] ' + (currentPage === "Tutors" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Tutors</Link>
        <Link to="/contact-us" className={'text-[18px] ' + (currentPage === "Contact Us" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Contact Us</Link>
        <Link to="/pricing" className={'text-[18px] ' + (currentPage === "Pricing" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Pricing</Link>
        <Link to="/blog" className={'text-[18px] ' + (currentPage === "Blog" ? "text-[#FCCD2A]" : " hover:text-[#FCCD2A]")}>Blog</Link>
      </div>
      <Btn className="ml-auto mr-[50px] text-[18px] px-7 py-2.5">Book Trial Class</Btn>
    </div>
  );
}