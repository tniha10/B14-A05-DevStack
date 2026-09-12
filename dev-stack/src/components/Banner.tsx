import Image from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className=" my-7 px-4 py-10 md:px-16 md:py-18"> {/*my-17 - margin top and bottom 17, px-4 - padding left and right 4, py-10 - padding top and bottom 10, md:px-16 - padding left and right 16 from medium screens and above, md:py-18 - padding top and bottom 18 from medium screens and above*/}

          {/*Mobile view*/}
          <div className="flex flex-col items-center text-center gap-8 md:hidden"> {/*flex flex-col - flex container with column direction*/}

            <div> 
              <h1 className="text-2xl font-bold text-[#334155] mb-4">Build Your Ideal 
                <span className=" block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
              </h1> 

              <p className="mt-4 text-[#475569] text-sm">
                Explore frontend, backend, database, and tooling options, 
                compare them side by side, and put together the stack that fits
                your next project.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button className="rounded-md bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-4 py-2 text-sm text-white">Explore Technologies</button>
                <button className="rounded-md border border-gray-300 px-8 py-2 text-sm text-gray-600">Learn More</button>
              </div>
            </div>

            <div>
              <img src={Image} alt="Development Stack" className="w-40 h-auto" />
            </div>
          </div>

          {/*Desktop view*/}
          <div className="hidden md:flex items-center justify-between gap-8">

            <div className="w-1/2"> {/*w-1/2 - width 50%*/}
              <h1 className="text-5xl font-bold text-[#334155] mb-4">Build Your Ideal 
                <span className="block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
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
              <img src={Image} alt="Development Stack" className="w-full h-auto" />
            </div>
          </div>

        </section>
    );
};

export default Banner;