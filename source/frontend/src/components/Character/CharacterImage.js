import React from 'react';
import dead from '../../images/dead_avatar.PNG';
import alive from '../../images/alive_avatar.PNG';
import './Character.css'


function CharacterImage({ is_alive }) {
  return <img 
        className="character-image" 
        src={(is_alive ? alive : dead)} 
        alt={(is_alive ? "Wszystko w najlepszym porządku" : "Tu leży jakiś trup..")} 
    />;
}

export default CharacterImage;