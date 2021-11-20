import './Course.css'
import { join_course } from '../../actions/course'
import { connect } from 'react-redux'
import CommonLink from '../Common/CommonLink'
import CommonButton from '../Common/CommonButton'
import CourseLink from './CourseLink'

const Course = ({ course, join_course }) => {
    const joinCourse = (e) => {
        join_course(course.id)
    }
    return (
        <div className="div-course" key={course.id}>
            <CourseLink text={'Przeglądaj ' + course.title} destination={'/course/' + course.id} />
            <p>{course.description}</p>
            <CommonButton text="Dołącz do kursu" on_click={joinCourse} />
        </div>
    )
}
export default connect(null, { join_course })(Course)
