import "./App.css";
import LineChart from "./component/LineChart/LineChart";
// import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from "./component/NavBar/NavBar";
import Phones from "./component/Phones/Phones";
import PriceOption from "./component/PriceOption/PriceOption";
import PriceOptions from "./component/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
