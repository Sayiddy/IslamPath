import { Link } from "react-router-dom"
import Btn from "./Btn"
import { IoMdClose } from "react-icons/io"

export default function SideBar({setSideBarOpen}) {
  return (
    <>
      <div className="fixed w-screen h-screen bg-black opacity-50 z-40" onClick={() => setSideBarOpen(false)}></div>
      <IoMdClose className="fixed text-white size-10 top-0 right-0 m-5 z-50" onClick={() => setSideBarOpen(false)}>x</IoMdClose>
      <div className="fixed left-0 top-0 h-screen w-3/5 bg-white shadow-[4px_0px_20px_2px_rgba(0,0,0,0.25)] z-50">
        <div className="h-[100px] flex">
          <Btn className="mx-auto align-middle self-center text-[18px] px-7 py-2.5 w-fit block text-nowrap">Book Trial Class</Btn>
        </div>

        <div className="bg-black h-0.5 opacity-5"></div>

        <Link to="/" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>Home</p>
        </Link>

        <div className="bg-black h-0.5 opacity-5"></div>

        <Link to="/about-us" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>About Us</p>
        </Link>
        
        <div className="bg-black h-0.5 opacity-5"></div>

        <Link to="/courses" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>Courses</p>
        </Link>
        
        <div className="bg-black h-0.5 opacity-5"></div>

        <div to="/tutors" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>Tutors</p>
        </div>
        
        <div className="bg-black h-0.5 opacity-5"></div>

        <Link to="/contact-us" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>Contact Us</p>
        </Link>
        
        <div className="bg-black h-0.5 opacity-5"></div>

        <Link to="/pricing" className="h-15 flex">
          <p className={'text-[18px] text-cGery my-auto ml-5'}>Pricing</p>
        </Link>
        
        <div className="bg-black h-0.5 opacity-5"></div>

        <div to="/blog" className="h-15 flex">
          <div className={'text-[18px] text-cGery my-auto ml-5'}>Blog</div>
        </div>
        
        <div className="bg-black h-0.5 opacity-5"></div>
      </div>
    </>
  )
}