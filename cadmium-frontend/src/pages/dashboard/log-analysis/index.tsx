import React from 'react';
import Header from './header';
import { useParams } from 'react-router-dom';
import NotFound from '@/pages/not-found/not-found';
import Analyze from './analyze';
import Configure from './congfigure';
import Explorer from './explorer';

type Submodule = 'explorer' | 'analyze' | 'configure';

const LogAnalysis: React.FC = () => {
    const { submodule } = useParams<{ submodule: Submodule }>(); // Treat as a string to handle unmatched cases

    let content;

    switch (submodule) {
        case 'explorer':
            content = <Explorer />;
            break;
        case 'analyze':
            content = <Analyze />;
            break;
        case 'configure':
            content = <Configure />;
            break;
        default:
            content = <NotFound />; // Default case for unmatched submodules
            break;
    }

    return (
        <div>
            <Header />
            {content}
        </div>
    );
};

export default LogAnalysis;
