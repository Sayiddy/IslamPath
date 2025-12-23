import { AiFillInstagram, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill, BsYoutube } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { useEffect } from "react"
import NavBar from "../components/NavBar"
import bbr from "../assets/bbr.png";
import mbbr from "../assets/mbbr.png";

export default function ContactUs() {
  return (
    <>
      <NavBar currentPage="Contact Us"/>
      <img src={bbr} alt="" className="hidden lg:block absolute right-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <img src={mbbr} alt="" className="hidden lg:block absolute left-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <div className="grid grid-cols-1 gap-4 py-[82px]">
        <h1 className="text-4xl font-sans text-center font-bold text-cYellow">Contact Islam Path</h1>
        <p className="text-[18px] px-4 font-sans text-center text-cGery">Have a question or you want to get in touch? Here’s how</p>
      </div>

      <div className='flex flex-col justify-center lg:gap-[82px] gap-16 pb-[82px] items-center px-4 w-full'>
        <div className="flex flex-col items-center lg:flex-row justify-center lg:gap-[82px] gap-16 w-full">
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-6 sm:px-16 py-8 w-full lg:flex-1 min-w-0 max-w-[491px] h-[136px]">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none">Call Us</h1>
            <a href='tel:+201095283906' className='flex gap-3 items-center justify-center' aria-label='Call +201095283906'>
              <BsTelephoneFill className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>+201095283906</p>
            </a>
          </div>
          
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-6 sm:px-16 py-8 w-full lg:flex-1 min-w-0 max-w-[491px] h-fit my-auto">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none mx-auto text-center">Text us on Whatsapp</h1>
            <a href='https://wa.me/201095283906' target='_blank' rel='noopener noreferrer' className='flex gap-3 items-center justify-center' aria-label='Chat on WhatsApp with +201095283906'>
              <RiWhatsappFill className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>+201095283906</p>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-16 items-center w-full">
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[0px_0px_20px_2px_rgba(0,0,0,0.25)] px-6 sm:px-16 py-8 w-full lg:flex-1 min-w-0 max-w-[491px] h-[136px]">
            <h1 className="flex font-semibold font-sans text-[32px] justify-center leading-none">Send us an Email</h1>
            <a href='mailto:Islampathacademy@gmail.com' className='flex gap-3 items-center justify-center' aria-label='Send email to Islampathacademy@gmail.com'>
              <AiFillMail className='fill-cYellow text-2xl'/>
              <p className='font-semibold text-cGold'>Islampathacademy@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}