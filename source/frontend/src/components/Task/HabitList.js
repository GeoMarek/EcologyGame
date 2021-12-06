import '../../styles/Course.css'
import HabitListItem from './HabitListItem'

const HabitList = ({ habit_list, course_id }) => {
    return (
        <div>
            {habit_list.map((habit) => (
                <HabitListItem
                    habit={habit}
                    course_id={course_id}
                    key={habit.id}
                />
            ))}
        </div>
    )
}
export default HabitList
