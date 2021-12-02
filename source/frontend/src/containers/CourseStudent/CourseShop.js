import React, { useEffect, useState } from 'react'
import { get_course_by_id } from '../../actions/course'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import StudentShopList from '../../components/Shop/StudentShopList'
import axios from 'axios'
import { buy_item, sell_item, load_character } from '../../actions/character'

const CourseShop = ({
    course_global,
    match,
    isAuthenticated,
    buy_item,
    sell_item,
    eq,
    gold,
    load_character,
}) => {
    const [courseItemsData, setCourseItemsData] = useState([])
    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_course_items().then(({ data }) => {
                setCourseItemsData(data)
            })
            load_character(match.params.id)
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
                `${process.env.REACT_APP_API_URL}/course/${match.params.id}/shop/?t=user`,
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
    var cos = match.params.id
    console.log(cos)
    return (
        <div className="home-container">
            <div className="course-content">
                <div>
                    <StudentSideBar course_id={course_global.id} />
                    <h3 className="home-title">Witaj w sklepie</h3>
                    <h2 className="home-title">Twoje złoto: {gold}</h2>
                    <div className="course-content-container">
                        {eq ? (
                            <StudentShopList
                                student_items={eq}
                                sell={true}
                                buy_item={buy_item}
                                sell_item={sell_item}
                                course_id={match.params.id}
                            />
                        ) : (
                            <></>
                        )}
                        {courseItemsData.items ? (
                            <StudentShopList
                                student_items={courseItemsData.items}
                                sell={false}
                                buy_item={buy_item}
                                sell_item={sell_item}
                                course_id={match.params.id}
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
    eq: state.character.equipment,
    gold: state.character.characters[0].gold,
})

export default connect(mapStateToProps, {
    get_course_by_id,
    buy_item,
    sell_item,
    load_character,
})(CourseShop)
