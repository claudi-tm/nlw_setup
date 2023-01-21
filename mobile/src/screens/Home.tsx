import { Text, View, ScrollView } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

const WEEK_DAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
const DATES_FROM_YEAR_START = generateRangeDatesFromYearStart();
const MINUMUM_SUMMARYDATES_DATES_SIZES = 18 * 5;
const AMOUNT_OF_DAYS_TO_FILL =
	MINUMUM_SUMMARYDATES_DATES_SIZES - DATES_FROM_YEAR_START.length;

export function Home() {
	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<Header></Header>
			<View className="flex-row mt-6 mb-2">
				{WEEK_DAYS.map((weekDay, index) => (
					<Text key={`${weekDay}-${index}`}
						className="text-zinc-400 text-xl font-bold text-center mx-1"
						style={{ width: DAY_SIZE }}
					>
						{weekDay}
					</Text>
				))}
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<View className="flex-row flex-wrap">
					{DATES_FROM_YEAR_START.map((date) => (
						<HabitDay key={date.toISOString()}></HabitDay>
					))}
					{AMOUNT_OF_DAYS_TO_FILL > 0 &&
						Array.from({
							length: AMOUNT_OF_DAYS_TO_FILL,
						}).map((_, index) => (
							<View
								key={index}
								className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
								style={{ width: DAY_SIZE, height: DAY_SIZE }}
							></View>
						))}
				</View>
			</ScrollView>
		</View>
	);
}
