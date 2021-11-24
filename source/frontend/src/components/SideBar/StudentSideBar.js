import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const StudentSideBar = ({ course }) => {
    const course_link_path = '/course/' + course.id + '/'

    return (
        <div className="sidebar">
            <p id="sidebar-header">Menu kursu</p>
            <ul>
                <SideBarLink
                    destination={course_link_path}
                    text="Strona kursu"
                />
                <SideBarLink
                    destination={course_link_path + 'monsters'}
                    text="Lista potworów"
                />
                <SideBarLink
                    destination={course_link_path + 'habits'}
                    text="Lista nawyków"
                />
                <SideBarLink
                    destination={course_link_path + 'character'}
                    text="Mój bohater"
                />
                <SideBarLink
                    destination={course_link_path + 'shop'}
                    text="Sklep"
                />
            </ul>
        </div>
    )
}

export default StudentSideBar
