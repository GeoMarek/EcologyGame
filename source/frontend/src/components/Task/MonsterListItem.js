import React, { useState } from 'react'
import { get_quiz } from '../../actions/quiz'
import { connect } from 'react-redux'
import CommonButton from '../Common/CommonButton'
import { Redirect } from 'react-router-dom'
import course from '../../reducers/course'

const MonsterListItem = ({ monster, get_quiz, isAuthenticated, course_id }) => {
    var image_dir = `${process.env.PUBLIC_URL}/MonsterIcons/`
    var seed = monster.reward_gold % 4
    var monster_image = image_dir + 'monster_' + seed + '.png'

    const [redirectData, setRedirectData] = useState({
        redirect: 0,
    })
    const renderRedirect = () => (
        <Redirect
            to={'/course/' + course_id + '/monsters/' + redirectData.redirect}
        />
    )
    const openTaskSubmitPage = (e) => {
        console.log('Próba rozwiązania zadania od id ' + monster.id)
        get_quiz(course_id, monster.id)
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { get_quiz })(MonsterListItem)
