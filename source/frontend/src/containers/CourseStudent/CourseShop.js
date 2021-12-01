import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import StudentSideBar from '../../components/SideBar/StudentSideBar'
import StudentShopList from '../../components/Shop/StudentShopList'

const CourseShop = ({ course_global, match, isAuthenticated }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    const wood_weapon = {
        id: 1,
        item_name: 'Miecz treningowy',
        sell_price: '10',
        buy_price: '20',
        eq_type: 'weapon',
        item_image: 'wooden_sword.png',
        stat: 5,
    }

    const wood_armor = {
        id: 2,
        item_name: 'Skórzany płaszcz',
        sell_price: '10',
        buy_price: '20',
        eq_type: 'armor',
        item_image: 'wooden_armor.png',
        stat: 5,
    }

    const iron_weapon = {
        id: 3,
        item_name: 'Żelazny miecz',
        sell_price: '20',
        buy_price: '40',
        eq_type: 'weapon',
        item_image: 'iron_sword.png',
        stat: 10,
    }

    const iron_armor = {
        id: 4,
        item_name: 'Żelazna zbroja',
        sell_price: '20',
        buy_price: '40',
        eq_type: 'armor',
        item_image: 'iron_armor.png',
        stat: 10,
    }

    // finalnie to zastępujemy ekwipunek + armor + weapon
    const student_sell = [wood_armor, wood_weapon]

    // finalnie zastępujemy to przedmiotami, które admin dodał
    const student_buy = [iron_weapon, iron_armor]

    if (!isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <div>
                    <StudentSideBar course_id={course_global.id} />
                    <h3 className="home-title">Witaj w sklepie</h3>
                    <div className="course-content-container">
                        <StudentShopList
                            student_items={student_sell}
                            sell={true}
                        />
                        <StudentShopList
                            student_items={student_buy}
                            sell={false}
                        />
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

export default connect(mapStateToProps, { get_course_by_id })(CourseShop)
