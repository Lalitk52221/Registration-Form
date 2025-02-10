import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout } from "./Redux/authSlice";

const Header = () => {
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="fixed z-50 bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 text-white shadow-md w-full">
      <div className=" flex items-center justify-around px-4 py-2 font-semibold ">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to={"/"}>
            <img
              src="./images/logo.png"
              alt="logo"
              className="md:w-32 w-24 brightness-150 drop-shadow-lg"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex lg:space-x-6 md-space-x-3 justify-center items-center">
          <NavLink to={"/"} className="nav-item">
            <p className="text-xl "> Home</p>
          </NavLink>
          {isAuthenticated && (
            <NavLink to={"/all-data"} className="nav-item">
              <p className="text-xl"> All Data</p>
            </NavLink>
          )}
          <NavLink to={"/registration-form"} className="nav-item">
            <p className="text-xl"> Registration Form</p>
          </NavLink>

          <span>
            {isAuthenticated ? (
              <span
                onClick={handleLogout}
                className="bg-red-700 py-2 px-4 rounded-lg shadow-sm"
              >
                {" "}
                Logout
              </span>
            ) : (
              <NavLink to={"/login"} className="">
                <p className="font-semibold bg-blue-700 py-2 px-4 rounded-lg shadow-sm">
                  Login
                </p>
              </NavLink>
            )}{" "}
          </span>
        </nav>
        
          <NavLink to={"/"}>
            <img
              src="./images/SMF-logo.png"
              alt="logo"
              className="md:w-32 w-24 drop-shadow-lg "
            />
          </NavLink>

        {/* Mobile Menu */}
        <div className="md:hidden ">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div id="mobile-menu" className="md:hidden hidden bg-blue-700 text-white">
        <NavLink
          to={"/"}
          className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            to={"/all-data"}
            className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
          >
            All Data
          </NavLink>
        )}
        <NavLink
          to={"/registration-form"}
          className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
        >
          Registration Form
        </NavLink>
        <NavLink
          to={"/login"}
          className="block px-4 py-2 hover:bg-blue-800 transition duration-300"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
