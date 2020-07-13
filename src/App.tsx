import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [planets, setPlanets] = useState<Planet[]>([]);
  // const [starships, setStarships] = useState<Starship[]>([]);

  
  // console.log(planets);
  // console.log(starships);

  useEffect(() => {
    async function fetchMovies() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
