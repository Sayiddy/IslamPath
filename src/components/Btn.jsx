import { Link } from "react-router-dom";

export default function Btn({className, children}) {
  return (
    <Link to="/trial-class" className={"bg-transparent outline-cYellow outline-3 hover:bg-cBronze hover:outline-none hover:text-white text-cBlack text-center px-4 py-2 rounded-[15px] transition-all duration-300 " + className}>
      {children}
    </Link>
  );
}