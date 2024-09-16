import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-red-800 mt-10">
        Hot Hot Coffees
      </h1>
      <div className="grid grid-cols-2 my-10 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
