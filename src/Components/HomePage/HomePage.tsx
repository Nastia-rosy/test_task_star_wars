import React from 'react';
import './HomePage.scss';

const HomePage: React.FC = () => {

  return (
    <div className="home-page">
      <img 
        src="https://mfst.igromania.ru/wp-content/uploads/2020/07/Star-Wars-Sequel-Trilogy.jpg" 
        alt="Star Wars"
        className="home-page__img"
      />
      <h2 className="home-page__title">
        Star Wars
      </h2>
      <p className="home-page__text">
        Star Wars is a science-fiction franchise comprising movies, books, comics,
        video games, toys, and animated shows. It is a fictional universe created
        by George Lucas. The Star Wars story employs archetypal motifs common to
        science fiction, political climax and classical mythology, as well as musical
        motifs of those aspects.

        As one of the foremost examples of the space opera subgenre of science fiction,
        Star Wars has become part of mainstream popular culture, as well as being one
        of the highest-grossing series of all time. It is currently the second
        highest-grossing film series behind only the Marvel Cinematic Universe
        and also the second highest-grossing media franchise of all time (with only
        the Japanese franchise Pokémon outranking it).
      </p>
    </div>
  );
}

export default HomePage;
