import Actor from "./Actor";
import "./App.css";
import Singer from "./Singer";
import Todo from "./Todo";
import BookStore from "./BookStore";

function App() {
  
  const actors = ["Sakib", "Jasim", "Bappa Raz", "Rubel"]

  const singers = [
    {name: "Mahfuz", age: 23},
    {name: "Alam", age: 35},
    {name: "Ariana", age: 30},
    {name: "Lana", age: 45}
  ]

  const books = [
    {name: "Physics", price: 320},
    {name: "Chemistry", price: 620},
    {name: "Biology", price: 520},
    {name: "Math", price: 220}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>

      <Student name="Osman" grade="12" score="90"></Student>
      <Student name="Ali" grade="8" score="65"></Student>
      <Student name="Omar" grade="10" score="79"></Student>
      <Student name="Abu Bakar" grade="6" score="89"></Student>

      <Device name="Laptop" price="2154"></Device>
      <Device name="Mobile" price="2000"></Device>
      <Device name="Camera" price="1545"></Device>
      
      <Todo task="Learn React" isDone = {true}></Todo>
      <Todo task="Learn JSX" isDone = {true}></Todo>
      <Todo task="Explore Core Concepts" isDone = {false}></Todo>
      
      <BookStore books= {books}></BookStore>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      
    </>
  );
}

// component 1
function Person() {
  const age = 25;
  const person = {
    name: "Sakib khan",
    profession: "CEO",
  };

  const personStyle = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "7px",
  };

  return (
    <div style={personStyle}>
      <h3>Hello from Person component</h3>
      <h3>This person is {age} years old</h3>
      <h3>
        The name of the person is {person.name}, he is {age} years old, he is a{" "}
        {person.profession}.
      </h3>
    </div>
  );
}

// component 2
function Student({ name, grade, score }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <h3>Grade: {grade}</h3>
      <h3>Score: {score}</h3>
    </div>
  );
}

// component 3
function Device(props) {
  return (
    <div className="device">
      <h3>Device Name : {props.name}</h3>
      <h3>Device Price : {props.price}</h3>
    </div>
  );
}

export default App;
