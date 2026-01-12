import IslamPathLogo from "../assets/IslamPathLogo.jsx";
import NavBar from "../components/NavBar.jsx";
import home from "../assets/Home_Bg.jpg"
import { useEffect } from "react";
import Btn from "../components/Btn.jsx";
import { Link } from "react-router-dom";

export default function Home() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar currentPage="Home"/>

			<div className="flex flex-col w-full h-[620px] bg-cover bg-center home-bg-mobile xl:home-bg">
				<div className="flex flex-col mx-auto xl:ml-80 my-auto gap-[35px]">
					<h1 className="text-white font-sans text-4xl font-bold w-[279px]">Best Quran and Arabic Lessons</h1>
					<h1 className="text-white font-sans text-[18px] font-bold w-[279px]">Conducted by Native Speakers from Egypt</h1>
					<Link to="/trial-class" className="flex h-[46px] w-fit px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center  cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300">Book Trial Class</Link>
				</div>
			</div>

			<div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto py-20 align-middle bg-cWhite">
				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Learn Qur’an, Arabic & Islam
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
							Clear • Authentic • Structured Learning<br/>
							<br/>
							Islam Path is your trusted gateway to understanding the Qur’an, Arabic language, and Islamic studies from authentic sources — designed specifically for non-Arabic speakers. <br/>
							<br/>
							We don’t just teach you how to read.<br/>
							We guide you to understand, master, and connect.<br/>
						</p>
					</div>
				</div>

				<div className="bg-cBlack size-[450px] mx-auto xl:mr-0 xl:ml-auto hidden xl:block"></div>
			</div>

			<div className="w-full bg-cBronze">
				<div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto py-20 align-middle">
					<div className="bg-cBlack size-[450px] mx-auto xl:ml-0 xl:mr-auto xl:row-start-1 xl:col-start-1 row-start-2 col-start-1 hidden xl:block"></div>

					<div className="flex flex-col align-middle my-auto">
						<h1 className="text-[32px] font-sans font-bold text-cYellow">
							What You Will Learn
						</h1>

						<div className="mt-5 align-middle">
							<p className="text-cYellowWhite text-2xl">
							• Qur’an Recitation & Memorization <br/>
							Learn to recite the Qur’an correctly with Tajwīd rules, step by step, with personal guidance until fluency.<br/>
							<br/>
							• Arabic Language <br/>
							From letters and basic vocabulary to grammar and Qur’anic Arabic — a structured curriculum that builds real understanding. <br/>
							<br/>
							• Islamic Studies <br/>
							Aqeedah, Tafsir, Seerah, and Fiqh explained clearly and simply for non-Arabic speakers, without confusion or complexity. <br/>
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto py-20 align-middle bg-cWhite">
				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Why Islam Path?
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
							• Qualified and experienced teachers<br/>
							• Clear, level-based curricula<br/>
							• Interactive lessons, not passive learning<br/>
							• Continuous assessment and real progress<br/>
							• Respect for your time and learning goals<br/>
						</p>
					</div>
				</div>

				<div className="bg-cBlack size-[450px] mx-auto xl:mr-0 xl:ml-auto hidden xl:block"></div>
			</div>

			<div className="w-full bg-cBronze">
				<div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto py-20 align-middle">
					<div className="bg-cBlack size-[450px] mx-auto xl:ml-0 xl:mr-auto xl:row-start-1 xl:col-start-1 row-start-2 col-start-1 hidden xl:block"></div>

					<div className="flex flex-col align-middle my-auto">
						<h1 className="text-[32px] font-sans font-bold text-cYellow">
							Who Is This For?
						</h1>

						<div className="mt-5 align-middle">
							<p className="text-cYellowWhite text-2xl">
								• Non-Muslims exploring Islam<br/>
								• New Muslims<br/>
								• Learners who want to understand the Qur’an beyond translation<br/>
								• Anyone seeking authentic, structured Islamic education<br/>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-rows-1 xl:grid-rows-1 xl:grid-cols-2 w-4/5 mx-auto py-20 align-middle bg-cWhite">
				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Start Your Journey Today
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
							Begin your journey with the Qur’an and Arabic with confidence.<br/>
							Let Islam Path guide you toward clarity and understanding.<br/>
<br/>
							Learn • Understand • Grow<br/><br/>
							<Link
            to="/trial-class"
            className="bg-cBronze hover:bg-transparent border-3 border-transparent hover:border-cYellow hover:text-cBlack hover:scale-105 text-white text-[20px] rounded-[15px] px-6 py-3 mt-4 mx-auto cursor-pointer transition-all duration-300"
          >
            Book Trial Class
          </Link>
						</p>
					</div>
				</div>

				<div className="bg-cBlack size-[450px] mx-auto xl:mr-0 xl:ml-auto hidden xl:block"></div>
			</div>
		</>
	);
}
