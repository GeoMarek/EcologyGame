import './Course.css'
import { Link } from 'react-router-dom'
import { join_course } from '../../actions/course'
import { connect } from 'react-redux'

// const Course = () => {
//     return (
//         <div className="course-container" key="id">
//             <h3 className="course-title">Nazwa przykładowego kursu</h3>
//             <p className="course-description">
//                 To jest przykładowy kurs. Tutaj będzie się znajdował jego opis.
//                 Stworzono go, by móc przestestować wygląd kontenera dla
//                 pojedynczego kursu
//             </p>
//             <button className="course-join-button">Dołącz do kursu</button>
//         </div>
//     )
// }

const Course = ({ course, join_course }) => {
    const joinCourse = (e) => {
        join_course(course.id)
    }
    return (
        <div className="course-container" key={course.id}>
            <h3 className="course-title">{course.title} </h3>
            <p className="course-description">{course.description}</p>
            <button className="course-join-button" onClick={joinCourse}>
                Dołącz do kursu
            </button>
        </div>
    )
}
export default connect(null, { join_course })(Course)
