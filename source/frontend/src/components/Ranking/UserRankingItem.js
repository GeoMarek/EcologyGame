import React from 'react'

const UserRankingItem = ({ user, index, ifAdmin }) => {
    var heart = Array('\u2665')
    var star = Array('\u272A')
    console.log(user)

    const resurrectUser = (e) => {
        console.log('Wskrzeszanie gracza ' + user.name)
    }

    const resurrectButton = (
        <button className="student-shop-button" onClick={resurrectUser}>
            Wskrześ gracza
        </button>
    )

    return (
        <tr key={index}>
            <td>{user.name}</td>
            <td>{user.level} ⚜</td>
            <td>
                {user.curent_hp}/{user.max_hp} {heart}
            </td>
            <td>
                {user.current_exp}/{user.max_exp} {star}
            </td>
            <td>{user.gold} 💰</td>
            {ifAdmin ? (
                <td>{user.isAlive ? 'Postać żyje' : resurrectButton}</td>
            ) : (
                <></>
            )}
        </tr>
    )
}
export default UserRankingItem
