import { use } from "react";
import type {Itechnology} from "../../types/technologyType";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    return(
        <section className="max-w-7xl mx-auto px-4 py-10"> {/*Adjusted padding for better spacing*/}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0F172A]mb-2">Explore the
                 <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="text-[#64748B] mt-2">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted grid layout for responsiveness */}

                {/*.map() function to iterate over the technologies array and render a TechnologiesCard for each technology*/}
                {technologies.map((technology) => (
                    <TechnologiesCard key={technology.id} technology={technology}/>
                ))}
            </div>
        </section>
    );
};

export default Technologies;