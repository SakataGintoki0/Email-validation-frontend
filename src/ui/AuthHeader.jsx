import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function AuthHeader() {
  const [active, setActive] = useState();
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  // console.log(active);

  const normalStyle =
    "w-1/2 text-center font-semibold text-lg py-6 bg-secondary text-secondary-content shadow-inner";
  const activeStyle =
    "w-1/2 text-center font-semibold py-6 text-lg text-base-content";

  return (
    <div className="w-full flex">
      <NavLink
        to="/signin"
        className={
          active === "/signin" ? activeStyle : `rounded-tl-xl ${normalStyle}`
        }
      >
        Sign In
      </NavLink>
      <NavLink
        to="/signup"
        className={
          active === "/signup" ? activeStyle : `rounded-tr-xl ${normalStyle}`
        }
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default AuthHeader;
