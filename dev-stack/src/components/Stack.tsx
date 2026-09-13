import type { Itechnology } from "../types/technologyType";

interface StackProps {
  selectedTechnologies: Itechnology[];
  onRemoveTechnology: (technologyId: string) => void;
  onRemoveAllTechnologies: () => void;
}

const Stack = ({selectedTechnologies, onRemoveTechnology, onRemoveAllTechnologies}: StackProps) => {
  const count = selectedTechnologies.length;

  return (
    <div className="border border-gray-100 bg-white p-5 shadow-md rounded-xl">
      <h2 className="text-lg font-semibold text-[#0F172A]">Your Stack</h2>

      <p className="mt-1 text-sm text-[#94A3B8]">
        {count === 0 ? "No technologies selected yet." : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-[#E2E8F0] px-4 py-8 text-center">
          <p className="text-sm text-[#94A3B8]">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2"> {selectedTechnologies.map((technology) => (
              <div key={technology.id} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-3 py-3">
                <div className="flex items-center gap-3">
                  <img src={technology.icon} alt="" className="h-8 w-8 object-contain"/>
                  <div>
                    <p className="text-sm font-medium text-[#0F172A]"> {technology.name} </p>
                    <p className="text-xs text-[#94A3B8]"> {technology.category} </p>
                  </div>
                </div>

                <button onClick={() => onRemoveTechnology(technology.id)} className="text-xl leading-none text-[#94A3B8] transition-colors hover:text-red-500"> x
                </button>
              </div>
            ))}
          </div>

          <button onClick={onRemoveAllTechnologies} className="mt-5 w-full rounded-lg border border-red-400 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"> Remove All </button>
        </>
      )}
    </div>
  );
};

export default Stack;