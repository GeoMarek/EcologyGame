import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const StudentSideBar = ({ course }) => {
    return (
        <div className="sidebar">
            <p id="sidebar-header">Menu kursu</p>
            <ul>
                <SideBarLink destination="/" text="Strona kursu" />
                <SideBarLink destination="/" text="Lista potworów" />
                <SideBarLink destination="/" text="Lista nawyków" />
                <SideBarLink
                    destination={'/course/' + course.id + '/character'}
                    text="Mój bohater"
                />
                <SideBarLink destination="/" text="Sklep" />
            </ul>
        </div>
    )
}

export default StudentSideBar
