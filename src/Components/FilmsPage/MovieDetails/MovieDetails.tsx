import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.scss';

type Props = {
  movie: Movie;
  planets: Planet[];
  starships: Starship[];
}

const MovieDetails: React.FC<Props> = ({ movie, starships, planets }) => {
  const [planetsInMovie, setPlanetsInMovie] = useState<Planet[]>([]);
  const [starshipsInMovie, setStarshipsInMovie] = useState<Starship[]>([]);
  const keepPlanets: Array<Planet> = [];
  const keepStarships: Array<Starship> = [];

  useMemo(() => {
    movie.planets.forEach(item => {
      const planet = planets.find(p => p.url === item);
      
      if (planet) {
        keepPlanets.push(planet);
      }
    })
    setPlanetsInMovie(keepPlanets);
  }, [keepPlanets, movie.planets, planets])

  useMemo(() => {
    movie.starships.forEach(item => {
      const starship = starships.find(s => s.url === item);
      
      if (starship) {
        keepStarships.push(starship);
      }
    })
    setStarshipsInMovie(keepStarships);
  }, [keepStarships, movie.starships, starships])

  console.log(planetsInMovie);
  console.log(starshipsInMovie);
  
  return (
    <>
      <Link to="/films" className="movie-details__back-button">
        &#8249; Back
      </Link>
      <div className="movie-details">
        <h2 className="movie-details__title">
          <span className="movie-details__header">Title:	&nbsp;</span>
          {movie.title}
        </h2>
        <p className="movie-details__text">
          <span className="movie-details__header">Description:	&nbsp;</span>
          {movie.opening_crawl}
        </p>
        <p className="movie-details__episode">
          <span className="movie-details__header">Episode:	&nbsp;</span>
          {movie.episode_id}
        </p>
        <p className="movie-details__director">
          <span className="movie-details__header">Director:	&nbsp;</span>
          {movie.director}
        </p>
        <p className="movie-details__producer">
          <span className="movie-details__header">Producer:	&nbsp;</span>
          {movie.producer}
        </p>
        <p className="movie-details__release">
          <span className="movie-details__header">Release date:	&nbsp;</span>
          {movie.release_date}
        </p>
        <p className="movie-details__planets">
          <span className="movie-details__header">Planets:	&nbsp;</span>
          {planetsInMovie.map(planet => (
            <span className="movie-details__planet">
              {planet.name}, &nbsp;
            </span>
          ))}
        </p>
        <p className="movie-details__starships">
          <span className="movie-details__header">Starships:	&nbsp;</span>
          {starshipsInMovie.map(starship => (
            <span className="movie-details__starship">
              {starship.name}, &nbsp;
            </span>
          ))}
        </p>
      </div>
    </>
  );
}

export default MovieDetails;