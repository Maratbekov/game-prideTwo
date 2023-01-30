import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./Hero.module.css";
import instagram from "../../assets/insta.svg";
import vk from "../../assets/vk.svg";
import facebook from "../../assets/fackbook.svg";

const Hero = () => {
  return (
    <section id={style.hero}>
      <div className="container">
        <div className={style.hero}>
          <nav className={style.navbar}>
            <NavLink to="/" className={style.navlink}>
              Главная
            </NavLink>
            <NavLink to="/battle" className={style.navlink}>
              Сражения
            </NavLink>
            <NavLink to="/chavo" className={style.navlink}>
              ЧАВО
            </NavLink>
            <NavLink to="/news" className={style.navlink}>
              Новости
            </NavLink>
          </nav>

          <div className={style.hero__socials}>
            <Link className={style.link}>
              <img src={instagram} alt="" />
            </Link>
            <Link className={style.link}>
              <img src={vk} alt="" />
            </Link>
            <Link className={style.link}>
              <img src={facebook} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
