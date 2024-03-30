import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';
const Header=()=>{
    return(
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <NavLink to="/" className={cl.logo}>
                        <img src="/images/header/shape-30.png" alt="" className={cl.logo__img} />
                        <p className={cl.logo__text}>YourBank</p>
                    </NavLink>
                    <ul className={cl.header__menu}>
                        <li className="header__menu-item">
                            <NavLink to="/" className={({isActive})=> isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link }>Home</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>Careers</a>
                        </li>
                        <li className="header__menu-item">
                            <NavLink to="/about" className={({isActive})=> isActive ? `${cl.menu__link} ${cl.menu__linkActive}` : cl.menu__link }>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;