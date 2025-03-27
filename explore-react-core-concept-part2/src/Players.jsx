import { useState } from "react";

export default function Players() {
  const [count, setCount] = useState(11);

  const handleAddPlayer = () => {
    const addPlayer = count + 1;
    setCount(addPlayer);
  };

  const handleRemovePlayer = () => {
    const removePlayer = count - 1;
    setCount(removePlayer);
  };

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        borderRadius: "9px",
      }}
    >
      <h3>Players: {count} </h3>
      <button onClick={handleAddPlayer}>Add Player</button>
      <button onClick={handleRemovePlayer}>Remove Player</button>
    </div>
  );
}
