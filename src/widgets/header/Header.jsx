import React from 'react';
import { toggleTheme, setActiveSection } from '../../store/portfolioSlice';
import { useSelector, useDispatch } from 'react-redux';

import './Header.scss';

function Header() {

    const dispatch = useDispatch();
    const { theme, activeSection } = useSelector((state) => state.portfolio);

    return (
        <header className={`portfolio__header portfolio__header--${theme}`}>
            <button
                className="portfolio__theme-toggle"
                onClick={() => dispatch(toggleTheme())}
            >
                Убрать {theme === 'light' ? 'Dark' : 'Light'} тему
            </button>
            <nav className="portfolio__nav">
                {['Главная', 'О нас', 'Проекты', 'Контакты'].map((section) => (
                    <button
                        key={section}
                        onClick={() => dispatch(setActiveSection(section))}
                        className={`portfolio__nav-button ${activeSection === section ? 'portfolio__nav-button--active' : ''
                            }`}
                    >
                        {section}
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default Header;