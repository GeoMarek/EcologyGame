import React, { useEffect, useState } from 'react'
import { get_course_by_id } from '../../actions/course'
import { connect } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import Item from '../../components/Shop/Item'
import axios from 'axios'

const CourseAdminShop = ({ course_global, match }) => {
    const [courseItemsData, setCourseItemsData] = useState([])
    const [allItemsData, setAllItemsData] = useState([])

    useEffect(
        () => {
            get_course_by_id(match.params.id)
            get_course_items().then(({data}) => {setCourseItemsData(data)})
            get_all_items().then(({data}) => {setAllItemsData(data)})
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

    const onChangeOld = (e) => {
        console.log('Remove old equipment')
    }

    const onChangeNew = (e) => {
        console.log('Add new equipment')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        add_items([9])
        console.log(e)
        this.setState(this.state)
        //this.forceUpdate()
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
                                {courseItemsData.items ? 
                                courseItemsData.items.map((user, index) => (
                                    <Item
                                    item={user}
                                    onChange={onChangeOld}
                                />
                                )):  <></>}
                            </div>
                            <div className="admin-shop-column">
                                <h3 className="course-content-title">
                                    Poza kursem
                                </h3>
                                {allItemsData ? 
                                allItemsData.map((user, index) => (
                                    <Item
                                    item={user}
                                    onChange={onChangeNew}
                                />
                                )):  <></>}
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
