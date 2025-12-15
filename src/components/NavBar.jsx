import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoR from '../assets/logoR.png';
import Btn from './Btn';

export default function NavBar({ currentPage }) {
  return (
    <div className="w-full h-[100px] bg-white align-middle sticky top-0 shadow-md flex items-center">
      <img src={logoR} alt="Islam Path Logo" className="h-[50px] m-[25px] ml-[50px] mr-auto"/>
      <div className='grid grid-rows-1 grid-flow-col gap-10 m-[25px]'>
        <Link to="/" className={'text-[18px] ' + (currentPage === "Home" ? "text-cYellow" : " hover:text-cYellow")}>Home</Link>
        <Link to="/about-us" className={'text-[18px] ' + (currentPage === "About Us" ? "text-cYellow" : " hover:text-cYellow")}>About Us</Link>
        <Link to="/courses" className={'text-[18px] ' + (currentPage === "Courses" ? "text-cYellow" : " hover:text-cYellow")}>Courses</Link>
        <Link to="/tutors" className={'text-[18px] ' + (currentPage === "Tutors" ? "text-cYellow" : " hover:text-cYellow")}>Tutors</Link>
        <Link to="/contact-us" className={'text-[18px] ' + (currentPage === "Contact Us" ? "text-cYellow" : " hover:text-cYellow")}>Contact Us</Link>
        <Link to="/pricing" className={'text-[18px] ' + (currentPage === "Pricing" ? "text-cYellow" : " hover:text-cYellow")}>Pricing</Link>
        <Link to="/blog" className={'text-[18px] ' + (currentPage === "Blog" ? "text-cYellow" : " hover:text-cYellow")}>Blog</Link>
      </div>
      <Btn className="ml-auto mr-[50px] text-[18px] px-7 py-2.5">Book Trial Class</Btn>
    </div>
  );
}