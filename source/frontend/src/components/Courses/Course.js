import '../../styles/Course.css'
import { join_course } from '../../actions/course'
import { connect } from 'react-redux'
import CommonButton from '../Common/CommonButton'
import CourseLink from './CourseLink'

const Course = ({ course, join_course, user }) => {
    const joinCourse = (e) => {
        join_course(course.id)
    }

    var show_button = false
    if (user !== null)
        show_button = !course.participants
            .concat(course.admins)
            .includes(user.id)

    return (
        <div className="div-course" key={course.id}>
            <CourseLink
                text={'Przeglądaj ' + course.title}
                destination={'/course/' + course.id}
            />
            <p>{course.description}</p>
            {show_button ? (
                <CommonButton text="Dołącz do kursu" on_click={joinCourse} />
            ) : (
                <> </>
            )}
        </div>
    )
}
export default connect(null, { join_course })(Course)
