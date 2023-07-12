import React,{useState, useEffect} from 'react';
import ChartsList from '../components/ChartsList';


const ChartsContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(()=> {
        getSongs();
    })

// const onSongClicked = function(song){
//     setSelectedSong(song)
// }

const getSongs = async function(){
    const res = await fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
    const songs = await res.json();
    setSongs(songs.feed.entry)
}   

return (
    <div>
        <ChartsList songs={songs} />
    </div>
)
}

export default ChartsContainer;