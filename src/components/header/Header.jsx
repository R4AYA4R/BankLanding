import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';
import { useState } from 'react';
const Header = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <NavLink to="/" className={cl.logo}>
                        <img src="/BankLanding/images/header/shape-30.png" alt="" className={cl.logo__img} />
                        <p className={cl.logo__text}>YourBank</p>
                    </NavLink>
                    <ul className={cl.header__menu}>
                        <li className="header__menu-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link}>Home</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>Careers</a>
                        </li>
                        <li className="header__menu-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link}>About</NavLink>
                        </li>
                    </ul>
                    <ul className={isActiveMenu ? `${cl.header__menuMobile} ${cl.header__menuMobileActive}` : cl.header__menuMobile}>
                        <li className="header__menu-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link} onClick={() => setIsActiveMenu(false)}>Home</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>Careers</a>
                        </li>
                        <li className="header__menu-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link} onClick={() => setIsActiveMenu(false)}>About</NavLink>
                        </li>
                    </ul>
                    <button className={cl.header__menuBtn} onClick={() => setIsActiveMenu((prev) => !prev)}>
                        <span className={isActiveMenu ? `${cl.menuBtn__span} ${cl.menuBtn__spanActive1}` : cl.menuBtn__span}></span>
                        <span className={isActiveMenu ? `${cl.menuBtn__span} ${cl.menuBtn__spanActive2}` : cl.menuBtn__span}></span>
                        <span className={isActiveMenu ? `${cl.menuBtn__span} ${cl.menuBtn__spanActive3}` : cl.menuBtn__span}></span>
                        <span className={isActiveMenu ? `${cl.menuBtn__span} ${cl.menuBtn__spanActive1}` : cl.menuBtn__span}></span>
                    </button>
                </div>
            </div>
        </header >
    )
}
export default Header;