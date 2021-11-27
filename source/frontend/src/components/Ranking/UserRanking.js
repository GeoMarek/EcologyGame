import React from 'react'
import UserRankingItem from './UserRankingItem'

const UserRanking = ({ users }) => {
    const header = (
        <thead>
            <tr>
                <td className="header-td">Użytkownik</td>
                <td className="header-td">Poziom</td>
                <td className="header-td">Punkty życia</td>
                <td className="header-td">Doświadczenie</td>
                <td className="header-td">Złoto</td>
            </tr>
        </thead>
    )

    return (
        <table>
            {header}
            {users.map((user, index) => (
                <UserRankingItem user={user} key={index} />
            ))}
        </table>
    )
}
export default UserRanking
