import { Link } from 'react-router-dom';
import cl from './../header/Header.module.css';
import logoImg from "./../header/shape-30.png";
import btn1 from "./Button (1).png";
import btn2 from "./Button (2).png";
import btn from "./Button.png";
import icon from "./Icon.png";
import icon1 from "./Icon (1).png";
import icon2 from "./Icon (2).png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__topline">
                        <Link to="/" className={cl.logo}>
                            <img src={logoImg} alt="" className={cl.logo__img} />
                            <p className={cl.logo__text}>YourBank</p>
                        </Link>
                        <ul className={cl.footer__menu}>
                            <li className="header__menu-item">
                                <Link to="/" className={cl.footer__link}>Home</Link>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className={cl.footer__link}>Careers</a>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/about" className={cl.footer__link}>About</Link>
                            </li>
                        </ul>
                        <div className="footer__topline-contacts">
                            <a href="#" className="contacts__email">
                                <img src={icon} alt="" className="contacts__email-img" />
                                <p className="contacts__email-text">hello@skillbirdge.com</p>
                            </a>
                            <a href="#" className="contacts__tel">
                                <img src={icon1} alt="" className="contacts__tel-img" />
                                <p className="contacts__tel-text">+91 91813 23 2309</p>
                            </a>
                            <a href="#" className="contacts__location">
                                <img src={icon2} alt="" className="contacts__location-img" />
                                <p className="contacts__location-text">Somewhere in the World</p>
                            </a>
                        </div>
                    </div>
                    <div className="footer__bottomline">
                        <div className="footer__bottomline-images">
                            <a href="" className="footer__bottomline-link">
                                <img src={btn} alt="" className="footer__bottomline-img" />
                            </a>
                            <a href="" className="footer__bottomline-link">
                                <img src={btn1} alt="" className="footer__bottomline-img" />
                            </a>
                            <a href="" className="footer__bottomline-link">
                                <img src={btn2} alt="" className="footer__bottomline-img" />
                            </a>
                        </div>
                        <p className="footer__bottomline-text">YourBank All Rights Reserved</p>
                        <div className="footer__bottomline-subBlock">
                            <a href="#" className="subBlock__text">Privacy Policy</a>
                            <a href="#" className="subBlock__desc">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;