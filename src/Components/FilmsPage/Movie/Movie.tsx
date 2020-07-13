import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movie.scss';

type Props = {
  movie: Movie;
}

const moviesImages = [
  'A New Hope',
  'Attack of the Clones',
  'Return of the Jedi',
  'Revenge of the Sith',
  'The Empire Strikes Back',
  'The Phantom Menace'
];

const Movie: React.FC<Props> = ({ movie }) => {
  const movieImg = moviesImages.find(item => item === movie.title);
  const urlParam = `star wars ${movie.title}`.toLowerCase().split(' ').join('-');
  
  return (
    <>
        <li className="movie__item" key={movie.title}>
          <div className="movie__text-wrapper">
            <NavLink 
              to={`/films/${urlParam}`}
              className="movie__title-link"
            >
              <h2 
                className="movie__title"
              >
                star wars: {movie.title}
              </h2>
            </NavLink>
            <p className="movie__text">
              {movie.opening_crawl}
            </p>
            <h4 className="movie__category">
              films
            </h4>        
          </div>
          <NavLink 
              to={`/films/${urlParam}`}
              className="movie__image-link"
          >
            <div className="movie__img-wrapper">
              <img 
                src={`./images/${movieImg}.jpg`} 
                alt={movieImg} 
                className="movie__image"
              />        
            </div>
          </NavLink>
      </li>   
    </>
  );
}

export default Movie;