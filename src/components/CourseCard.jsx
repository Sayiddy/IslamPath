import { Link } from "react-router-dom";

export default function CourseCard({ title, subtitle, URL, image }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] w-[325px] h-full">
      <img className='bg-cBlack size-[325px] rounded-t-2xl' src={image}></img>
      <div className="m-8 flex flex-col gap-4 h-full justify-center">
        <h1 className="flex font-bold font-sans text-[24px] text-cBlack justify-center leading-none text-center">{title}</h1>
        <div className='flex flex-col gap-[-16px]'>
          <h1 className="flex font-sans text-[18px] text-cGery justify-center leading-none text-center">{subtitle}</h1>  
        </div>
        <Link to={URL} className='flex flex-col w-[217px] h-[46px] rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center self-center cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300'>
          Course Details
        </Link>
      </div>
    </div>
  )
}