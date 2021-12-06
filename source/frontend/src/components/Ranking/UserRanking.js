import React from 'react'
import UserRankingItem from './UserRankingItem'

const UserRanking = ({ users, ifAdmin, course_id }) => {
    const header = (
        <thead>
            <tr>
                <td className="header-td">Użytkownik</td>
                <td className="header-td">Poziom</td>
                <td className="header-td">Punkty życia</td>
                <td className="header-td">Doświadczenie</td>
                <td className="header-td">Złoto</td>
                {ifAdmin ? <td className="header-td">Status</td> : <></>}
            </tr>
        </thead>
    )

    return (
        <table>
            {header}
            <tbody>
                {users.map((user, index) => (
                    <UserRankingItem
                        user={user}
                        key={index}
                        ifAdmin={ifAdmin}
                        course_id={course_id}
                    />
                ))}
            </tbody>
        </table>
    )
}
export default UserRanking
