import "./styles/global.css";
import { HabitDay } from "./components/HabitDay";

import { Plus } from "phosphor-react";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

function App() {
	return (
		<header>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="w-full max-w-5xl px-6 flex flex-col gap-16">
					<Header></Header>
					<SummaryTable></SummaryTable>
				</div>
			</div>
		</header>
	);
}

export default App;
