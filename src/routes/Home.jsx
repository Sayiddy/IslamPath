import IslamPathLogo from "../assets/IslamPathLogo.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Home() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar currentPage="Home"/>
		</>
	);
}
