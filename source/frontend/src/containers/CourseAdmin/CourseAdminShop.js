import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import Item from '../../components/Shop/Item'

const examle_old_weapon = {
    item_name: 'Żelazny miecz',
    sell_price: '10',
    buy_price: '20',
    eq_type: 'weapon',
    item_image: 'iron_sword.png',
    stat: 5,
}

const examle_old_armor = {
    item_name: 'Żelazna zbroja',
    sell_price: '20',
    buy_price: '30',
    eq_type: 'armor',
    item_image: 'iron_armor.png',
    stat: 8,
}

const CourseAdminShop = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    const onChangeOld = (e) => {
        console.log('Remove old equipment')
    }

    const onChangeNew = (e) => {
        console.log('Add new equipment')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="home-container">
            <div className="course-content">
                <AdminSideBar course_id={course_global.id} />
                <div className="course-content-container">
                    <h3 className="course-content-title">
                        Zarządzaj przedmiotami na kursie
                    </h3>
                    <div className="core-course-content-container">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="admin-shop-column">
                                <h3 className="course-content-title">
                                    Dodane do kursu
                                </h3>
                                <Item
                                    item={examle_old_armor}
                                    onChange={onChangeOld}
                                />
                                <Item
                                    item={examle_old_armor}
                                    onChange={onChangeOld}
                                />
                                <Item
                                    item={examle_old_armor}
                                    onChange={onChangeOld}
                                />
                            </div>
                            <div className="admin-shop-column">
                                <h3 className="course-content-title">
                                    Poza kursem
                                </h3>
                                <Item
                                    item={examle_old_weapon}
                                    onChange={onChangeNew}
                                />
                                <Item
                                    item={examle_old_weapon}
                                    onChange={onChangeNew}
                                />
                                <Item
                                    item={examle_old_weapon}
                                    onChange={onChangeNew}
                                />
                            </div>
                            <button className="common-button" type="submit">
                                Zaktualizuj przedmioty w kursie
                            </button>
                        </form>
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
