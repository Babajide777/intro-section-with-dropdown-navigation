import React from "react";
import NavStyled from "./styles/NavStyled";
import logo from "../assets/images/logo.svg";
import todo from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import down from "../assets/images/icon-arrow-down.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";
import up from "../assets/images/icon-arrow-up.svg";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState("overlay");

  return (
    <NavStyled>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-lg">
        <ul className="start-nav-links">
          <li className="nav-link">
            <a href="/">
              Features <img src={down} alt="" />
            </a>
            <ul className="feature-dropdown">
              <li>
                <a href="/">
                  <img src={todo} alt="todo" /> Todo List
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={calendar} alt="calendar" /> Calender
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={reminders} alt="reminders" /> Reminders
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={planning} alt="planning" /> Planning
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <a href="/">
              Company <img src={down} alt="" />
            </a>

            <ul className="company-dropdown">
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <a href="/">Careers</a>
          </li>
          <li className="nav-link">
            <a href="/">About</a>
          </li>
        </ul>
        <ul className="end-nav-links">
          <li className="nav-link">
            <a href="/">Login</a>
          </li>
          <li className="nav-link">
            <a href="/" className="register">
              Register
            </a>
          </li>
        </ul>
      </div>

      <div className={show}>
        <div className="together">
          <div className="close" onClick={() => setShow("overlay")}>
            <img src={close} alt="" />
          </div>

          <ul className="nav-mobile">
            <li>
              <a href="/" className="a">
                Features <img src={down} alt="" />
              </a>
              <ul className="feature-dropdown">
                <li>
                  <a href="/">
                    <img src={todo} alt="todo" /> Todo List
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={calendar} alt="calendar" /> Calender
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={reminders} alt="reminders" />
                    Reminders
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={planning} alt="planning" />
                    Planning
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Company</a>
              <img src={down} alt="" />
              <ul className="company-dropdown">
                <li>
                  <a href="/">History</a>
                </li>
                <li>
                  <a href="/">Our Team</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="nav-link">
              <a href="/">Login</a>
            </li>
            <li className="nav-link">
              <a href="/" className="register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ham" onClick={() => setShow("overlay show")}>
        <img src={menu} alt="" />
      </div>
    </NavStyled>
  );
};

export default Nav;
