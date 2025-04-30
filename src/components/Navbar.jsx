import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <nav className="nav-main">
      <div className="navbar">
        <div className="logo-content">
          <img src="/logo.png" className="logo" />
          <h2 className="logo-heading">
            <span className="text-gradient">CineFind</span>
          </h2>
        </div>

        <div className="nav-link-div">
          {isHomePage ? (
            <Link to="/favourites">
              <p className="nav-link">Favourites</p>
            </Link>
          ) : (
            <Link to="/">
              <p className="nav-link">Home</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
