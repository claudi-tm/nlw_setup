import "./styles/global.css" 
import { Habit } from "./components/Habit";
import logoImage from "./assets/Group 2.svg"


function App() {

	return(
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <header>
          <img src={logoImage} alt="Logo Image"/>
        </header>
      </div>
    </div>
  )
}

export default App;
