import Star from "../assets/star.png";
import type { Itechnology } from "../types/technologyType";

interface TechnologiesCardProps {
    technology: Itechnology;
    addToStack: (technology: Itechnology) => void;
}

const TechnologiesCard = ({ technology, addToStack }: TechnologiesCardProps) => {
    const { name, category, description, icon, rating, difficulty, badge } = technology;

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:-translate-y-3 transition-shadow duration-800">

            {/*Icon and Badge Section*/}
            <div className="flex justify-between items-center mb-4">
                <img src={icon} alt={name} className="w-10 h-10 object-contain" />

                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {badge}
                </span>
            </div>

            {/*Name Section*/}
            <h2 className="text-lg font-semibold mb-2">{name}</h2>

            {/*Description Section*/}
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            {/*Category, Difficulty and Rating Section*/}
            <div className="mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mr-2">{category}</span>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-xs text-gray-500">Difficulty</p>
                    <p className="font-semibold text-gray-800">{difficulty}</p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500">Rating</p>
                    <div className="flex items-center justify-end gap-1 font-semibold">
                        <img src={Star} alt="Star" className="w-4 h-4" />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>

            {/*Add to Stack Button*/}
            <button
                onClick={() => addToStack(technology)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"> Add to Stack
            </button>
        </div>
        
    );
};

export default TechnologiesCard;
