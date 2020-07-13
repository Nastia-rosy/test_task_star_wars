import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FilmsPage from '../FilmsPage/FilmsPage';
import MovieDetails from '../FilmsPage/MovieDetails/MovieDetails';

type Props = {
  movies: Movie[];
}

const Main: React.FC<Props> = ({ movies }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results)
    }

    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
    }


    fetchStarships();
    fetchPlanets();
  }, []);

  return (
    <main>
      <div className="container">
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/films" exact component={() => <FilmsPage movies={movies} />} />
          {movies.map(movie => {
            const urlParam = `star wars ${movie.title}`.toLowerCase().split(' ').join('-');

            return (
              <Route
                path={`/films/${urlParam}`}
                component={() => 
                  <MovieDetails movie={movie} planets={planets} starships={starships}
                />}
                key={urlParam}
              />
            )
          })}
        </Switch>
      </div>
    </main>
  );
}

export default Main;