import React, { useEffect, useState } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import axios from 'axios'
import AdminShopList from '../../components/Shop/AdminShopList'

const CourseAdminShop = ({ course_global, match }) => {
    const [courseItemsData, setCourseItemsData] = useState([])
    const [allItemsData, setAllItemsData] = useState([])

    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_course_items().then(({ data }) => {
                setCourseItemsData(data)
            })
            get_all_items().then(({ data }) => {
                setAllItemsData(data)
            })
        }, // eslint-disable-next-line
        []
    )

    // przykładowe itemki, można usunąć potem
    var example_items = [
        {
            id: 1,
            item_name: 'Miecz treningowy',
            sell_price: '10',
            buy_price: '20',
            eq_type: 'weapon',
            item_image: 'wooden_sword.png',
            stat: 5,
        },
        {
            id: 3,
            item_name: 'Żelazny miecz',
            sell_price: '20',
            buy_price: '40',
            eq_type: 'weapon',
            item_image: 'iron_sword.png',
            stat: 10,
        },
        {
            id: 4,
            item_name: 'Żelazna zbroja',
            sell_price: '20',
            buy_price: '40',
            eq_type: 'armor',
            item_image: 'iron_armor.png',
            stat: 10,
        },
    ]

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
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/shop/`,
                config
            )
            console.log('nie error :D')
            return ret
        } catch (err) {
            console.log('error ech')
        }
    }
    const get_all_items = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                //Authorization: `JWT ${localStorage.getItem('access')}`,
                //Accept: 'application/json',
            },
        }

        try {
            var ret = axios.get(
                `${process.env.REACT_APP_API_URL}/course/items/`,
                config
            )
            console.log('nie error :D')
            return ret
        } catch (err) {
            console.log('error ech')
        }
    }

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
            var ret = axios.put(
                `${process.env.REACT_APP_API_URL}/course/${match.params.course_id}/addItems/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log('error ech')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //add_items([9])
        console.log(e)
        //this.setState(this.state)
        //this.forceUpdate()
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
                        <AdminShopList available_items={example_items} />
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
