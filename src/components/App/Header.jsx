//Import components
import React, { useState } from "react";
import { Link } from "react-scroll";
import { tabEdit } from "../../store/slices/main";
import { useDispatch } from "react-redux";
//Import images
import logo from "@images/logo.svg";
import mobileLogo from "@images/texas-logo-mobile.svg";
//Import styles
import "@styles/components/header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);
  return (
    <header>
      <nav>
        <img
          onClick={() => {
            dispatch(
              tabEdit({
                tab: null,
                step: 0,
              })
            );
            window.scrollTo(0, 0);
          }}
          className="texas-logo-desktop"
          src={logo}
          alt="texas-cement-logo"
        />
        <img
          onClick={() => {
            dispatch(
              tabEdit({
                tab: null,
                step: 0,
              })
            );
            window.scrollTo(0, 0);
          }}
          className="texas-logo-mobile"
          src={mobileLogo}
          alt="texas-cement-logo"
        />
        <Link
          to="main"
          onClick={() =>
            dispatch(
              tabEdit({
                tab: null,
                step: 0,
              })
            )
          }
        ></Link>
        <div className={burger ? "sub-menu active" : "sub-menu"}>
          <Link to="advantages" onClick={() => setBurger(false)}>
            Advantages
          </Link>
          <Link to="course-outline" onClick={() => setBurger(false)}>
            Course outline
          </Link>
          <Link to="faq" onClick={() => setBurger(false)}>
            FAQ
          </Link>
          <Link to="about-us" onClick={() => setBurger(false)}>
            About Us
          </Link>
          <Link to="footer" onClick={() => setBurger(false)}>
            Contacts
          </Link>
          <button
            to="main"
            className="send-request-button"
            onClick={() => {
              dispatch(
                tabEdit({
                  tab: null,
                  step: 1,
                })
              );
              setBurger(false);
              window.scrollTo(0, 0);
            }}
          >
            Send request
          </button>
        </div>
        <div
          className={burger ? "burger active" : "burger"}
          onClick={() => setBurger(!burger)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
}
