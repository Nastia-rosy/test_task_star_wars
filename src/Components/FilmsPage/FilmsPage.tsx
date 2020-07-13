import React, { useCallback, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import Movie from './Movie/Movie';
import './FilmsPage.scss';

type Props = {
  movies: Movie[];
}

const FilmsPage: React.FC<Props> = ({ movies }) => {
  const [query, setQuery] = useState('');
  const [filterQuery, setfilterQuery] = useState('');
  const [films, setFilms] = useState(movies);

  const getVisibleMovies = (allMovies: Movie[], searchQuery: string) => {
    const pattern = new RegExp(searchQuery, 'i');

    return allMovies.filter(({ opening_crawl, title }) => pattern.test(opening_crawl + title));
  }

  let vissibleMovies = useMemo(
    () => getVisibleMovies(movies, filterQuery),

    [filterQuery, movies]
  );

  useMemo(
    () => setFilms(vissibleMovies),
   [vissibleMovies])

  const setfilterQueryWithDebonce = useCallback(
    debounce(setfilterQuery, 1000),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setfilterQueryWithDebonce(event.target.value)
  }

  const handleSortButton = () =>  {
    const sortedMovies = [...films].sort((a, b) => a.title.localeCompare(b.title));
    setFilms(sortedMovies)
  }

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={query}
          className="search__input"
          placeholder="Search Movie"
          onChange={handleChange}
        />
        <div className="search__icon"></div>
      </div>
      <button
        className="movies__sort-button"
        onClick={handleSortButton}
      >
        Sort by name
      </button>
      <ul className="movies__list">
        {films.map(movie => (
          <Movie movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default FilmsPage;