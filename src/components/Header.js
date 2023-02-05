import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
// import SignupForm from "./SignUpForm";
import useOnline from "../utils/useOnline";
// import SignInForm from "./SigninForm";

const Title = () => (
  <a href="/">
    <img
      className="h-[49px] mr-[16px] block drop-shadow-lg hover:drop-shadow-2xl"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="bg-fixed inset-x-0 top-0 h-[80px] px-5 shadow-lg">
      <div className="m-0 p-0">
        <div className="relative max-w-[1200px] min-w-[1200px] my-0 mx-auto h-[80px] flex items-center">
          <Title />
          <div className="relative flex items-center ml-[30px] max-w-[300px] h-[30px] mb-[1px] pr-[10px]">
            <span>Location : Thane</span>
          </div>
          <div className="flex-1 h-[80px]">
            <ul className="flex flex-row-reverse items-center min-w-0 h-full">
              <li className="mr-0 text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <div>
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsLoggedIn(true);
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>
              </li>
              <li className="mr-[60px] text-base font-medium text-green-500">
                <span>{isOnline ? "🔵" : "🔴"}</span>
              </li>
              <li className="mr-[60px] text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="mr-[60px] text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <Link to="/instamart">Instamart</Link>
              </li>
              <li className="mr-[60px] text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mr-[60px] text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <Link to="/about">About</Link>
              </li>
              <li className="mr-[60px] text-[rgb(61,65,82)] text-base font-medium hover:text-orange">
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
