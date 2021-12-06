import React from 'react'
import axios from 'axios'

const UserRankingItem = ({ user, index, ifAdmin, course_id }) => {
    var heart = Array('\u2665')
    var star = Array('\u272A')
    console.log(user)

    const resurrectUser = (e) => {
        console.log('Wskrzeszanie gracza ' + user.id)
        res_user(user.id, course_id)
    }

    const res_user = (char_id, course_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        }

        const body = JSON.stringify({})

        try {
            var ret = axios.put(
                `${process.env.REACT_APP_API_URL}/course/${course_id}/res/${char_id}/`,
                body,
                config
            )
            console.log(ret)
            return ret
        } catch (err) {
            console.log(err)
        }
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
