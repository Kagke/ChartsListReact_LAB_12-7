import React from 'react';

const ChartsItem = ({song, onSongClicked})=>{
    
    const handleClick = function(){
        onSongClicked(song)
    }

    return(
        <div>
            
            <li onClick={handleClick}>
                {song["im:name"].label}
            </li>
        </div>
    )
};

export default ChartsItem;
