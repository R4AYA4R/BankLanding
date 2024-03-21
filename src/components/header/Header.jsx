import cl from './Header.module.css';
const Header=()=>{
    return(
        <header className={cl.header}>
            <div className="container">
                <div className={cl.header__inner}>
                    <a href="#" className={cl.logo}>
                        <img src="/images/header/shape-30.png" alt="" className={cl.logo__img} />
                        <p className={cl.logo__text}>MBank</p>
                    </a>
                    <ul className={cl.header__menu}>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>Home</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>Careers</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className={cl.menu__link}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;