import React from 'react';
import ChartsItem from './ChartsItem';


const ChartsList = ({songs}) => {

    const ChartsItems = songs.map((song, index) => {
      return <ChartsItem song={song} key={index}/>
    })

  return (
    <div>
    <ol>
      {ChartsItems}
    </ol>
  </div>
  )
}

export default ChartsList;