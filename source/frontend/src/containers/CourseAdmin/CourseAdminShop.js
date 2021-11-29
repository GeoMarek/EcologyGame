import React, { useEffect } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import Item from '../../components/Shop/Item'
import axios from 'axios'

const wood_weapon = {
    item_name: 'Miecz treningowy',
    sell_price: '10',
    buy_price: '20',
    eq_type: 'weapon',
    item_image: 'wood_sword.png',
    stat: 5,
}

const iron_weapon = {
    item_name: 'Żelazny miecz',
    sell_price: '20',
    buy_price: '40',
    eq_type: 'weapon',
    item_image: 'iron_sword.png',
    stat: 10,
}

const gold_weapon = {
    item_name: 'Pozłacany rapier',
    sell_price: '30',
    buy_price: '60',
    eq_type: 'weapon',
    item_image: 'gold_sword.png',
    stat: 20,
}

const diamond_weapon = {
    item_name: 'Diamentowe ostrze',
    sell_price: '40',
    buy_price: '80',
    eq_type: 'weapon',
    item_image: 'diamond_sword.png',
    stat: 35,
}

const wood_armor = {
    item_name: 'Skórzany płaszcz',
    sell_price: '10',
    buy_price: '20',
    eq_type: 'armor',
    item_image: 'wood_armor.png',
    stat: 5,
}

const iron_armor = {
    item_name: 'Żelazna zbroja',
    sell_price: '20',
    buy_price: '40',
    eq_type: 'armor',
    item_image: 'iron_armor.png',
    stat: 10,
}

const gold_armor = {
    item_name: 'Pozłacana kolczuga',
    sell_price: '30',
    buy_price: '60',
    eq_type: 'armor',
    item_image: 'gold_armor.png',
    stat: 20,
}

const diamond_armor = {
    item_name: 'Kryształowy pancerz',
    sell_price: '40',
    buy_price: '80',
    eq_type: 'armor',
    item_image: 'diamond_armor.png',
    stat: 35,
}

const CourseAdminShop = ({ course_global, match }) => {
    useEffect(
        () => {
            get_course_by_id(match.params.id)
        }, // eslint-disable-next-line
        []
    )

    const add_items = (items_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({
            items_id,
        })

        try {
            axios.put(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/addItems/`,
                body,
                config
            )
            console.log('nie error :D')
        } catch (err) {
            console.log('error ech')
        }
    }

    const onChangeOld = (e) => {
        console.log('Remove old equipment')
    }

    const onChangeNew = (e) => {
        console.log('Add new equipment')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        add_items([1, 2])
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
                                    item={wood_weapon}
                                    onChange={onChangeOld}
                                />
                                <Item
                                    item={iron_weapon}
                                    onChange={onChangeOld}
                                />
                                <Item
                                    item={gold_weapon}
                                    onChange={onChangeOld}
                                />
                                <Item
                                    item={diamond_weapon}
                                    onChange={onChangeOld}
                                />
                            </div>
                            <div className="admin-shop-column">
                                <h3 className="course-content-title">
                                    Poza kursem
                                </h3>
                                <Item
                                    item={wood_armor}
                                    onChange={onChangeNew}
                                />
                                <Item
                                    item={iron_armor}
                                    onChange={onChangeNew}
                                />
                                <Item
                                    item={gold_armor}
                                    onChange={onChangeNew}
                                />
                                <Item
                                    item={diamond_armor}
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
