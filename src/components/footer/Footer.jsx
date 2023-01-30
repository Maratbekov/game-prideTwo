import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import footerLogo from "../../assets/lofoFooter.svg";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id={style.footer}>
      <div className="container">
        <div className={style.footer}>
          
          <div className={style.footer__logo}>
            <Link to="/" className={style.logo}>
            <img src={footerLogo} alt="" />
            GAME <br /> PRIDE
            </Link>
          </div>
         
            <ul>
              <li className={style.footer__link}>
                <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ 2021</p>
              </li>
              <li className={style.footer__info}>
                <Link>INFO@GMAIL.COM</Link>
              </li>
              <li className={style.list}>
                <Link>ГЛАВНАЯ</Link>
              </li>
              <li className={style.list}>
                <Link>СРАЖЕНИЯ</Link>
              </li>
              <li className={style.list}>
                <Link>ЧАВО</Link>
              </li>
              <li className={style.list}>
                <Link>НОВОСТИ</Link>
              </li>
            </ul>
         
          <div className={style.footer__btns}>
            <button className={style.footer__btn}>
              <FaChevronUp />
            </button>
            <button className={style.footer__btnTwo}>GO TO TOP</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
