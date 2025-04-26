import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-sm border-b border-white/10">
      <div className="flex justify-between">
        <div className="px-4 py-3 flex justify-start gap-6">
          <img src="/logo.png" className="w-10 h-8" />
          <h2 className="text-white text-3xl font-bold cursor-pointer">
            <span className="text-gradient">CineFind</span>
          </h2>
        </div>

        <div className="mt-1.5 mr-3 cursor-pointer">
          {isHomePage ? (
            <Link to="/favourites">
              <p className="text-lg font-bold text-white mt-2 mr-1.5">
                Favourites
              </p>
            </Link>
          ) : (
            <Link to="/">
              <p className="text-lg font-bold text-white mt-2 mr-1.5 ">Home</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
