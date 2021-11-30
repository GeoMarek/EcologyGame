import '../../styles/Course.css'
import HabitListItem from './HabitListItem'

const HabitList = ({ habit_list }) => {
    return (
        <div>
            {habit_list.map((habit) => (
                <HabitListItem habit={habit} />
            ))}
        </div>
    )
}
export default HabitList
