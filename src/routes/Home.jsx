import IslamPathLogo from "../assets/IslamPathLogo.jsx";
import NavBar from "../components/NavBar.jsx";
import home from "../assets/Home_Bg.jpg"

export default function Home() {
	return (
		<>
			<NavBar currentPage="Home"/>

			<div className="flex flex-col w-full h-[620px] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0) 100%), url(${home})`,}}>
				<div className="flex flex-col ml-48 mt-[221px] gap-[35px]">
					<h1 className="text-white font-sans text-4xl font-bold w-[279px]">Best Quran and Arabic Lessons</h1>
					<h1 className="text-white font-sans text-[18px] font-bold w-[279px]">Conducted by Native Speakers from Egypt</h1>
					<button className="flex h-[46px] w-fit px-4 rounded-[15px] font-semibold text-white bg-cBronze justify-center items-center  cursor-pointer hover:scale-105 hover:bg-white hover:border-cYellow hover:border-3 hover:text-cBlack hover:font-normal transition-all duration-300">Book Trial Class</button>
				</div>
			</div>

			<div className="grid grid-cols-2 px-80 py-20 align-middle bg-cWhite">
				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Learn Quran Online with Tajweed
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
						Learning the Quran with tajweed is essential because it preserves the beauty, accuracy, and meaning of Allah’s words. Tajweed ensures that each letter of the Quran is pronounced correctly and with its proper rules, preventing mistakes that could alter the meaning of the verses. By studying tajweed, learners not only improve their recitation but also deepen their connection with the Quran, reciting it as it was revealed to the Prophet Muhammad ﷺ. Mastering tajweed brings both spiritual reward and inner peace, as it allows one to engage with the Quran in the most respectful and heartfelt manner.
						</p>
					</div>
				</div>

				<div className="bg-cBlack w-[450px] h-[450px] ml-auto">
				</div>
			</div>

			<div className="grid grid-cols-2 px-80 py-20 align-middle bg-cBronze">
				<div className="bg-cBlack w-[450px] h-[450px] mr-auto"></div>

				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Learn Quran Online with Tajweed
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
						Learning the Quran with tajweed is essential because it preserves the beauty, accuracy, and meaning of Allah’s words. Tajweed ensures that each letter of the Quran is pronounced correctly and with its proper rules, preventing mistakes that could alter the meaning of the verses. By studying tajweed, learners not only improve their recitation but also deepen their connection with the Quran, reciting it as it was revealed to the Prophet Muhammad ﷺ. Mastering tajweed brings both spiritual reward and inner peace, as it allows one to engage with the Quran in the most respectful and heartfelt manner.
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 px-80 py-20 align-middle bg-cWhite">
				<div className="flex flex-col align-middle my-auto">
					<h1 className="text-[32px] font-sans font-bold text-cYellow">
						Learn Quran Online with Tajweed
					</h1>

					<div className="mt-5 align-middle">
						<p className="text-cGery text-2xl">
						Learning the Quran with tajweed is essential because it preserves the beauty, accuracy, and meaning of Allah’s words. Tajweed ensures that each letter of the Quran is pronounced correctly and with its proper rules, preventing mistakes that could alter the meaning of the verses. By studying tajweed, learners not only improve their recitation but also deepen their connection with the Quran, reciting it as it was revealed to the Prophet Muhammad ﷺ. Mastering tajweed brings both spiritual reward and inner peace, as it allows one to engage with the Quran in the most respectful and heartfelt manner.
						</p>
					</div>
				</div>

				<div className="bg-cBlack w-[450px] h-[450px] ml-auto">
				</div>
			</div>
		</>
	);
}
