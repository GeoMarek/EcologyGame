import React from 'react'
import SideBarLink from './SideBarLink'
import './SideBar.css'

const AdminSideBar = ({ course }) => {
    return (
        <div className="sidebar">
            <p id="sidebar-header">Zarządzaj kursem</p>
            <ul className="sidebar-list">
                <SideBarLink destination="/" text="Strona kursu" />
                <SideBarLink destination="/" text="Lista zadań" />
                <SideBarLink destination="/" text="Dodaj zadanie" />
                <SideBarLink destination="/" text="Statystyki" />
                <SideBarLink destination="/" text="Sklep" />
                <SideBarLink destination="/" text="Usuń kurs" />
            </ul>
        </div>
    )
}

export default AdminSideBar
