import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const StudentSideBar = () => {
    return (
        <div className="sidebar">
            <p id="sidebar-header">Menu kursu</p>
            <ul>
                <SideBarLink destination="/" text="Strona kursu" />
                <SideBarLink destination="/" text="Bohater" />
                <SideBarLink destination="/" text="Potwory" />
                <SideBarLink destination="/" text="Nawyki" />
                <SideBarLink destination="/" text="Ranking" />
                <SideBarLink destination="/" text="Sklep" />
            </ul>
        </div>
    )
}

export default StudentSideBar
