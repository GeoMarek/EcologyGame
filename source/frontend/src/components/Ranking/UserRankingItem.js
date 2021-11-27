import React from 'react'

const UserRankingItem = ({ user, key }) => {
    var heart = Array('\u2665')
    var star = Array('\u272A')

    return (
        <tr key={key}>
            <td>{user.name}</td>
            <td>{user.level} ⚜</td>
            <td>
                {user.curent_hp}/{user.max_hp} {heart}
            </td>
            <td>
                {user.current_exp}/{user.max_exp} {star}
            </td>
            <td>{user.gold} 💰</td>
        </tr>
    )
}
export default UserRankingItem
