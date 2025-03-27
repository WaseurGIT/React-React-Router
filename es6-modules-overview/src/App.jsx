import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple watch", price: 250 },
  //   { id: 2, name: "Samsung watch", price: 150 },
  //   { id: 3, name: "Casio watch", price: 550 },
  //   { id: 4, name: "Walton watch", price: 950 },
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
