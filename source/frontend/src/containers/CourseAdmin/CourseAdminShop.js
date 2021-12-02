import React, { useEffect, useState } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import AdminShopList from '../../components/Shop/AdminShopList'

const CourseAdminShop = ({ course_global, match, isAuthenticated }) => {
    const [courseItemsData, setCourseItemsData] = useState([])

    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_course_items().then(({ data }) => {
                setCourseItemsData(data)
            })
        }, // eslint-disable-next-line
        []
    )

    const get_course_items = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        try {
            var ret = axios.get(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/shop/?t=admin`,
                config
            )
            console.log('nie error :D')
            return ret
        } catch (err) {
            console.log('error ech')
        }
    }
    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <div className="course-content-container">
                    <h3 className="course-content-title">
                        Dodaj przedmioty do sklepu
                    </h3>
                    <div className="core-course-content-container">
                        {courseItemsData.items ? (
                            <AdminShopList
                                available_items={courseItemsData.items}
                                course_id={match.params.course_id}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    course_global: state.course.course.course,
})

export default connect(mapStateToProps, { get_course_by_id })(CourseAdminShop)
