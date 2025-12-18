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
      <NavBar currentPage="Pricing"/>
      <img src={bbr} alt="" className="hidden lg:block absolute right-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>
      <img src={mbbr} alt="" className="hidden lg:block absolute left-0 bottom-0 opacity-20 -z-10 pointer-events-none h-[135%] lg:w-1/2 w-full" style={{transform: 'translate(0%, 35%)'}}/>

      <div className="grid grid-cols-1 gap-4 py-[82px]">
        <h1 className="text-4xl font-sans text-center font-bold text-cYellow">Pricing Plan</h1>
        <p className="text-[18px] font-sans text-center text-cGery">Learn with Islam path at your own pace with fair prices</p>
      </div>

      <div className='flex flex-col justify-center mb-[82px] gap-15'>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-sans text-center font-bold text-black">Pricing Plan for 30 Minute Classes</h1>
          <div className='flex flex-col justify-center gap-4'>
            <div className="flex flex-row justify-center gap-10">
              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">2 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$32</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">3 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$48</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">4 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$64</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">5 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$80</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-sans text-center font-bold text-black">Pricing Plan for 45 Minute Classes</h1>
          <div className='flex flex-col justify-center gap-4'>
            <div className="flex flex-row justify-center gap-10">
              <div className="flex flex-col gap-4 my-auto bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">2 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$48</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 my-auto bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">3 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$72</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">4 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <div className='flex flex-col'>
                    <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$90</p>
                    <p className='flex font-sans text-[22px] text-[#FF0000] line-through'>Instead of $96</p>
                  </div>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">5 Days/Week</h1>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-col'>
                    <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$113</p>
                    <p className='flex font-sans text-[22px] text-[#FF0000] line-through'>Instead of $120</p>
                  </div>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-sans text-center font-bold text-black">Pricing Plan for 60 Minute Classes</h1>
          <div className='flex flex-col justify-center gap-4'>
            <div className="flex flex-row justify-center gap-10">
              <div className="flex flex-col gap-4 my-auto bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">2 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$64</p>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 my-auto bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">3 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <div className='flex flex-col'>
                    <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$90</p>
                    <p className='flex font-sans text-[22px] text-[#FF0000] line-through'>Instead of $96</p>
                  </div>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">4 Days/Week</h1>
                <div className='flex flex-col gap-[-16px]'>
                  <div className='flex flex-col'>
                    <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$120</p>
                    <p className='flex font-sans text-[22px] text-[#FF0000] line-through'>Instead of $128</p>
                  </div>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] p-8 w-[234px] h-fit">
                <h1 className="flex font-bold font-sans text-[26px] text-cGery justify-center leading-none">5 Days/Week</h1>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-col'>
                    <p className='flex font-bold font-sans text-[68px] text-cGold justify-center'>$150</p>
                    <p className='flex font-sans text-[22px] text-[#FF0000] line-through'>Instead of $160</p>
                  </div>
                  <h1 className="flex font-sans text-[26px] text-cGery justify-center leading-none">Per Month</h1>  
                </div>
                <div className='flex flex-col w-[170px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
                  Book Trial Class
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}