import "./App.css";
import Counter from "./features/counter/Counter";
import Robots from "./app/Components/Robots";
import Search from "./app/Components/SearchBar";

function App() {

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <Counter></Counter>
      <h1>ROBOFRIENDS</h1>
      <Search />
      <Robots></Robots>
    </div>
  );
}

export default App;
