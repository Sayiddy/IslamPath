import logo from '../assets/logo.png';

export default function NavBar({ currentPage }) {
  return (
    <div className="w-full h-[100px] bg-[#FFFDF5] align-middle sticky top-0 shadow-md">
      <img src={logo} alt="Islam Path Logo" className="size-[50px] m-25"/>
    </div>
  );
}