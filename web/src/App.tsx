import "./styles/global.css";
import { Habit } from "./components/Habit";
import logoImage from "./assets/Group 2.svg";
import { Plus } from "phosphor-react";

function App() {
	return (
		<header>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="w-full max-w-5xl px-6 flex flex-col gap-16">
					<div className="w-full max-w-3xl max-auto flex items-center justify-between">
						<img src={logoImage} alt="Logo Image" />
						<button
							type="button"
							className="border border-violet-500 rounded-lg px-6 py-4 flex gap-3 hover:border-violet-300"
						>
							<Plus size={20} className="text-violet-500" />
							Novo hábito
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default App;
