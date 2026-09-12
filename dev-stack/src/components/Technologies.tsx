import { use, useState } from "react";
import type {Itechnology} from "../types/technologyType";
import TechnologiesCard from "./TechnologiesCard";
import Stack from "./Stack";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);

    const addToStack = (technology: Itechnology) => {
      setSelectedTechnologies((previous) => {
        const alreadySelected = previous.some((item) => item.id === technology.id);
        if(alreadySelected){
            return previous;
        }
        return [...previous, technology];
      });    
    };

    const removeFromStack = (technologyId: string) => {
      setSelectedTechnologies((previous) => previous.filter((technology) => technology.id !== technologyId));
    };

    const removeAll = () => {setSelectedTechnologies([]);
    };

    return(
        <section className="max-w-7xl mx-auto px-4 py-10 md:px-8"> {/*Adjusted padding for better spacing*/}
            <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#0F172A] mb-2">Explore the
                 <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="text-[#64748B] mt-2">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4"> 
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                    {/*.map() function to iterate over the technologies array and render a TechnologiesCard for each technology*/}
                    {technologies.map((technology) => (
                        <TechnologiesCard key={technology.id} technology={technology} addToStack={addToStack} isSelected={selectedTechnologies.some((t) => t.id === technology.id)}/>
                    ))}   
                </div>   
            
                <div className="lg:col-span-1">
                    <Stack selectedTechnologies={selectedTechnologies} onRemoveTechnology={removeFromStack}   onRemoveAllTechnologies={removeAll}/>
                </div>
            </div>
        </section>
    );
};

export default Technologies;