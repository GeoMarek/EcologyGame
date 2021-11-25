import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const AdminSideBar = ({ course_id }) => {
    const course_link_path = '/course/' + course_id
    return (
        <div className="sidebar">
            <p id="sidebar-header">Zarządzaj kursem</p>
            <ul className="sidebar-list">
                <SideBarLink
                    destination={course_link_path}
                    text="Strona kursu"
                />
                <SideBarLink
                    destination={course_link_path + '/tasklist'}
                    text="Lista zadań"
                />
                <SideBarLink
                    destination={course_link_path + '/addtask'}
                    text="Dodaj zadanie"
                />
                <SideBarLink
                    destination={course_link_path + '/statistics'}
                    text="Statystyki"
                />
                <SideBarLink
                    destination={course_link_path + '/adminshop'}
                    text="Sklep"
                />
                <SideBarLink destination="/" text="Usuń kurs" />
            </ul>
        </div>
    )
}

export default AdminSideBar
