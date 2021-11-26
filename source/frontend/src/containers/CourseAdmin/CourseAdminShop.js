import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import '../../components/Shop/Shop.css'
import Item from '../../components/Shop/Item'

const examle_old_weapon = {
    item_name: 'Drewniany miecz',
    sell_price: '10',
    buy_price: '20',
    eq_type: 'weapon',
    item_img: '',
    stat: 5,
}

const examle_old_armor = {
    item_name: 'Skórzany pancerz',
    sell_price: '10',
    buy_price: '20',
    eq_type: 'armor',
    item_img: '',
    stat: 5,
}

const CourseAdminShop = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <div className="admin-shop-container">
                    <h3 className="home-title">
                        Zarządaj przedmiotami na kursie
                    </h3>
                    <div>
                        <div className="home-column items-container">
                            <Item item={examle_old_armor} />
                            <Item item={examle_old_weapon} />
                        </div>
                        <div className="home-column items-container">
                            <Item item={examle_old_armor} />
                            <Item item={examle_old_weapon} />
                        </div>
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
