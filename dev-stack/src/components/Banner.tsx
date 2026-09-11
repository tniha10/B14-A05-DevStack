import Image from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="px-15 py-18">
          <div className="flex items-center justify-between">

            <div className="w-1/2"> {/*w-1/2 - take half of the width of the parent container*/}
              <h1 className="text-5xl font-bold text-[#334155] mb-4">Build Your Ideal 
                <span className=" block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
              </h1> 

              <p className="mt-4 text-[#475569] text-lg">
                Explore frontend, backend, database, and tooling options, 
                <br />
                compare them side by side, and put together the stack that fits
                <br />
                your next project.
                <br />
              </p>

              <div className="mt-8 flex gap-3">
                <button className="rounded-md bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-4 py-2 text-sm text-white">Explore Technologies</button>
                <button className="rounded-md border border-gray-300 px-8 py-2 text-sm text-gray-600">Learn More</button>
              </div>
            </div>

            <div className="w-1/2 flex justify-center">
              <img src={Image} alt="Development Stack" className="w-110 h-auto" />
            </div>
          </div>

        </section>
    );
};

export default Banner;