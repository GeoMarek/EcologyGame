import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_all_courses } from '../actions/course';
import Course from '../components/Courses/Course';

const Courses = ({ get_all_courses, courses_global}) => {
    const [coursesData, setCoursesData] = useState({
        courses: []
    });

    useEffect(() => {
        get_all_courses();
        setCoursesData({
            courses: courses_global
        });
    }, []);

    const onClick = e => {
        console.log('cos');
        get_all_courses();
        setCoursesData({
            courses: courses_global
        });
        console.log(coursesData.courses);
        console.log(coursesData.courses.length > 0 ? coursesData.courses[0] : " nope");
    };

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Courses</h1>

                {courses_global.map((course, index) => (
                    <Course key={index} course={course} />
                ))}

                <button onClick={onClick}>klik me</button>
                <hr class='my-4' />
                <p>Tytul kursu: {coursesData.courses.length > 0 ?  " " + coursesData.courses[1].title : " brak"}</p>
                <p>Tytul kursu: {courses_global.length > 0 ?  " " + courses_global[1].title : " brak"}</p>
                <br/>
                <Link class='btn btn-primary btn-lg' to='/' role='button'>Home</Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    courses_global: state.course.kursy,
});

export default connect(mapStateToProps, { get_all_courses })(Courses);