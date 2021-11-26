import './Task.css'
import '../Courses/Course.css'

const QuestionItem = ({ question }) => {
    var task_type = ''
    switch (question.task_type) {
        case 'habit_question':
            switch (question.habit_type) {
                case 'positiv':
                    task_type += 'Pozytywny nawyk'
                    break
                case 'negativ':
                    task_type += 'Negatywny nawyk'
                    break
                default:
                    task_type += 'Mieszany nawyk'
            }
            break
        case 'open_question':
            task_type += 'Otwarte'
            break
        case 'closed_question':
            task_type += 'Zamknięte'
            break
        default:
            task_type += 'Nietypowe zadanie'
            break
    }

    return (
        <div className="div-task">
            <h4 className="course-title task-title">
                {question.question_name}{' '}
            </h4>
            <p className="task-content">Typ: {task_type}</p>
            <p className="task-content">{question.content}</p>
        </div>
    )
}
export default QuestionItem
