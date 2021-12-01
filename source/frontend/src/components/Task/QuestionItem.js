import '../../styles/Task.css'
import '../../styles/Course.css'

const QuestionItem = ({ question }) => {
    var task_type = ''
    switch (question.quiz_type) {
        case 'habit_question':
        case 'hp':
            task_type += 'Nawyk Pozytywny'
            break
        case 'hn':
            task_type += 'Nawyk Negatywny'
            break
        case 'hm':
            task_type += 'Nawyk Mieszany'
            break
        case 'open_question':
        case 'o':
            task_type += 'Otwarte'
            break
        case 'closed_question':
        case 't':
            task_type += 'Zamknięte'
            break
        default:
            task_type += 'Nietypowe zadanie'
            break
    }

    return (
        <div className="div-task">
            <h4 className="course-title task-title">{question.name} </h4>
            <p className="task-content">Typ: {task_type}</p>
            <p className="task-content">{question.description}</p>
        </div>
    )
}
export default QuestionItem
