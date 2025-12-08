import { Link } from "react-router-dom";

export default function Btn({className, children}) {
  return (
    <Link to="/trial-class" className={"bg-[#347928] outline-[#347928] outline-3 hover:bg-[#C0EBA6] hover:text-[#347928] text-white font-bold px-4 py-2 rounded transition-all duration-300 " + className}>
      {children}
    </Link>
  );
}