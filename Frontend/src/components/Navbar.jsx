import { Link } from "react-router-dom";
import logo from "../assets/just-play-logo.png";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="w-full grid grid-cols-3 mx-auto px-4 sm:px-6 lg:px-8 font-bold text-xl">
        <div className="flex items-center justify-end">
          <Link to="/" className="hover:animate-bounce">
            GAMES
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="h-20 w-auto" />
        </div>
        <div className="flex items-center justify-start">
          <Link to="/create" className="hover:animate-bounce">
            CREATE GAME
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
