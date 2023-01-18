import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Habit } from "./components/Habit";

function App() {
	const [count, setCount] = useState(0);

	return(
    <div className="habit">
      <Habit completed={3}></Habit>
    </div>
  ) 
}

export default App;
