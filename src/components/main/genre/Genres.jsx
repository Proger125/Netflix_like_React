import React from 'react';
import Genre from './Genre';

const genres = [
  {
    genre: 'ALL',
    isSelected: true,
  }, 
  {
    genre: 'DOCUMENTARY',
    isSelected: false,
  }, 
  {
    genre: 'COMEDY',
    isSelected: false,
  }, 
  {
    genre: 'HORROR',
    isSelected: false,
  },
  {  
    genre: 'CRIME',
    isSelected: false,
  },
];

export default class Genres extends React.Component {
  render() {
    return (
      <div className="genres">
        {genres.map(genre => (
          <Genre key={genre.genre} 
            genre={genre.genre} isSelected={genre.isSelected}/>
        ))}
      </div>
    );
  }
}