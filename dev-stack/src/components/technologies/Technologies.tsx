import React, { use } from 'react';
import type { Itechnology } from '../../types/technologyType';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    return (
        <div>
            
        </div>
    );
};

export default Technologies;