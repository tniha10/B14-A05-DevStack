import Nav from "./components/Nav"; 
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import { Suspense } from "react";
import type { Itechnology } from "./types/technologyType";

const technologiesFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch ("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback="Loading technologies...">
        <Technologies technologiesPromise={technologiesPromise}/>
      </Suspense>
    </>
  )
}

export default App
