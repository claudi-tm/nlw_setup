interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="bg-orange-400 m-2 rounded w-10 text-center flex items-center">{props.completed}</div>
    )
}