import React from 'react'
import '../../styles/Character.css'

function CharacterImage({ is_alive, level }) {
    var dir = `${process.env.PUBLIC_URL}/HeroIcons/`
    var low = 'low_level.webp'
    var medium = 'medium_level.webp'
    var high = 'high_level.webp'
    var ultra = 'ultra_level.webp'
    var dead = 'dead_hero.png'

    if (!is_alive) {
        dir += dead
    } else if (level < 2) {
        dir += low
    } else if (level < 3) {
        dir += medium
    } else if (level < 4) {
        dir += high
    } else {
        dir += ultra
    }

    return (
        <img
            className="character-image"
            src={dir}
            alt={
                is_alive
                    ? 'Wszystko w najlepszym porządku'
                    : 'Tu leży jakiś trup..'
            }
        />
    )
}

export default CharacterImage
