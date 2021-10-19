import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_all_courses } from '../actions/course';
import Course from '../components/Courses/Course';
import CourseSideBar from '../components/Courses/CourseSideBar';

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


    return (
        <div className='container'>
            <CourseSideBar/>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Courses</h1>

                {courses_global.map((course, index) => (
                    <Course key={index} course={course} />
                ))}

                <Link class='btn btn-primary btn-lg' to='/' role='button'>Home</Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    courses_global: state.course.kursy,
});

export default connect(mapStateToProps, { get_all_courses })(Courses);