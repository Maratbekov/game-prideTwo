import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header id={style.header}>
      <div className="container">
        <div className={style.header}>
          <div className={style.header__logo}>
            <Link to='/' className={style.logo}>
            <img src={logo} alt="" />
            GAME <br /> PRIDE
            </Link>
          </div>

          <nav>
            <button className={style.header__btn}>Регистрация</button>
            <button className={style.header__btnTwo}>Войти</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
