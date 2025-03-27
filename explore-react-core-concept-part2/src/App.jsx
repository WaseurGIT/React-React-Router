import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Photos from "./Photos/Photos";
import Players from "./Players";
import Posts from "./Posts/Posts";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Hello World");
  }

  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2 style={{ color: "violet", textDecoration: "underline" }}>
        React Core Concepts Part 2
      </h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addFive(6)}>Add Five</button>
      <Counter></Counter>
      <Players></Players>
      <Users></Users>
      <Friends></Friends>
      <Photos></Photos>
      <Posts></Posts>
    </>
  );
}

export default App;
