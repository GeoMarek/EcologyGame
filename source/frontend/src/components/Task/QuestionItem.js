import '../../styles/Task.css'
import '../../styles/Course.css'
import CommonLink from '../Common/CommonLink'

const QuestionItem = ({ question, course_id }) => {
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
    const dest = '/course/' + course_id + '/monsters/' + question.id + '/admin'

    return (
        <div className="div-task">
            <div className="column">
                <h4 className="course-title task-title">{question.name} </h4>
                <p className="task-content">Typ: {task_type}</p>
                <p className="task-content">{question.description}</p>
            </div>
            <div className="column">
                {question.quiz_type === 'o' ? (
                    <CommonLink text="Odpowiedzi" destination={dest} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
export default QuestionItem
