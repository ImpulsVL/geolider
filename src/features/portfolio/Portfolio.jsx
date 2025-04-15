import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {addSkill } from '../../store/portfolioSlice';
import { PortfolioScene } from '../scene/PortfolioScene';

import './Portfolio.scss';

import Header from '../../widgets/header/Header';

export function Portfolio() {
    const dispatch = useDispatch();

    const { theme, skills } = useSelector((state) => state.portfolio);
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill.trim()) {
            dispatch(addSkill(newSkill));
            setNewSkill('');
        }
    };

    return (
        <div className={`portfolio portfolio--${theme}`}>
            <Header />

            <main className="portfolio__main">
                <section className="portfolio__scene">
                    <PortfolioScene />
                </section>

                <section className="portfolio__skills">
                    <h2 className="portfolio__skills-title">Мои умения</h2>
                    <ul className="portfolio__skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="portfolio__skill-item">
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <div className="portfolio__skill-add">
                        <input
                            className="portfolio__skill-input"
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Добавьте новые навыки"
                        />
                        <button
                            className="portfolio__add-button"
                            onClick={handleAddSkill}
                        >
                            Добавить
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}