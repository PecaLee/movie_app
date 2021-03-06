import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.scss";

function Movie({ id, year, title, summary, poster, rating, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          rating,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genre">
            {genres.map((genre, index) => (
              <li key={index} className="genre__genre">
                {genre}
              </li>
            ))}
          </ul>
          <h6 className="movie__rating">rating : {rating}</h6>
          <p className="movie__summary">{summary.slice(0, 160)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
};

export default Movie;
