import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <p id="sidebar-header">Zarządzaj kursem</p>
            <ul className="sidebar-list">
                <SideBarLink destination="/" text="Strona kursu" />
                <SideBarLink destination="/" text="Ranking" />
                <SideBarLink destination="/" text="Sprawdź zadanie" />
                <SideBarLink destination="/" text="Dodaj zadanie" />
                <SideBarLink destination="/" text="Dodaj potwora" />
                <SideBarLink destination="/" text="Sklep" />
            </ul>
        </div>
    )
}

export default AdminSideBar
