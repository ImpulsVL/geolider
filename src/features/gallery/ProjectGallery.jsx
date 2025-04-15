import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import react from '../../assets/images/react.png';

import './ProjectGallery.scss';

const projectsData = [
    { id: 1, title: 'Разработчик', tags: ['React', 'Node.js'], image: react },
    { id: 2, title: 'Разработчик React', tags: ['Three.js', 'React'], image: react },
    { id: 3, title: 'Разработчик Next.js', tags: ['JavaScript', 'Redux'], image: react },
];

export function ProjectGallery() {

    const [selectedTag, setSelectedTag] = useState(null);
    const { theme } = useSelector((state) => state.portfolio);

    const filteredProjects = useMemo(() => {
        if (!selectedTag) return projectsData;

        return projectsData.filter(project =>
            project.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
        );
    }, [selectedTag]);

    const allTags = useMemo(() => {

        const tags = new Set();

        projectsData.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }, []);

    return (
        <div className={`gallery gallery--${theme}`}>
            <div className="gallery__tags">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        className={`gallery__tag-button ${tag === selectedTag ? 'gallery__tag-button--active' : ''
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="gallery__projects">
                {filteredProjects.map(project => (
                    <div key={project.id} className="gallery__project-card">
                        <h3 className="gallery__project-title">{project.title}</h3>
                        <div className="gallery__project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="gallery__project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="gallery__image-placeholder">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="gallery__project-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}