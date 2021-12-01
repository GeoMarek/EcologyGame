import React from 'react'
import { get_quiz } from '../../actions/quiz'
import { connect } from 'react-redux'
import CommonButton from '../Common/CommonButton'

const MonsterListItem = ({ monster, get_quiz, isAuthenticated }) => {
    var image_dir = `${process.env.PUBLIC_URL}/MonsterIcons/`
    var seed = monster.reward_gold % 4
    var monster_image = image_dir + 'monster_' + seed + '.png'

    const openTaskSubmitPage = (e) => {
        console.log('Próba rozwiązania zadania od id ' + monster.id)
        get_quiz(1, monster.id)
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
                <CommonButton text="Zaatakuj" on_click={openTaskSubmitPage} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { get_quiz })(MonsterListItem)
