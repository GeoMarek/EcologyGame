import React, { useState, useEffect }from 'react'
import CommonButton from '../Common/CommonButton'
import { Redirect } from 'react-router-dom'

const MonsterListItem = ({ monster, course_id }) => {
    var image_dir = `${process.env.PUBLIC_URL}/MonsterIcons/`
    var seed = monster.reward_gold % 4
    var monster_image = image_dir + 'monster_' + seed + '.png'


    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect to={'/course/' + course_id + '/monsters/' + redirectData.redirect} />
    )
    const openTaskSubmitPage = (e) => {
        setRedirectData({ ...redirectData, redirect: monster.id })
    }

    const image_component = (
        <img
            className="monster-image"
            src={monster_image}
            alt="Ten potwór jest niewidzialny"
        />
    )

    return (
        <div className="div-task" key={monster.id}>
            {redirectData.redirect !== 0 ? renderRedirect() : <div />}
            <div className="monster-icon">{image_component}</div>
            <div className="monster-data">
                <p>
                    <span style={{ color: 'bisque', fontWeight: 650 }}>
                        Zadanie:{' '}
                    </span>
                    {monster.name}
                </p>
                <p>
                    <span style={{ color: 'bisque', fontWeight: 650 }}>
                        Nagroda:{' '}
                    </span>
                    {monster.reward_gold} szt. złota
                </p>
            </div>
            <div className="monster-button">
                <CommonButton text="Podejrzyj" on_click={openTaskSubmitPage} />
            </div>
        </div>
    )
}
export default MonsterListItem
