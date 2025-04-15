import React from 'react';
import './MainPage.scss';

import { Portfolio } from '../../features/portfolio/Portfolio';
import { ProjectGallery } from '../../features/gallery/ProjectGallery';

function MainPage() {
    return (
        <div className='wrapper'>
            <Portfolio />
            <ProjectGallery />
        </div>
    );
}

export default MainPage;