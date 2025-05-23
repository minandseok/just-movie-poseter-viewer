import PropTypes from "prop-types";
import Link from "next/link";

const Movie = ({ id, title, year, rating, genres, cover_image }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={cover_image}
          alt={`${title} poster`}
          className="poster-image"
        />
        <div className="movie-overlay">
          <div className="rating-badge">⭐ {rating}</div>
        </div>
      </div>

      <div className="movie-info">
        <h2 className="movie-title">
          <Link href={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className="movie-details">
          <span className="movie-year">{year}</span>
          <div className="movie-genres">
            {genres.slice(0, 2).map((genre, index) => (
              <span
                key={index}
                className="genre-tag">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .movie-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .movie-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(100, 255, 218, 0.2);
          border-color: rgba(100, 255, 218, 0.3);
        }

        .movie-poster {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .poster-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .movie-card:hover .poster-image {
          transform: scale(1.1);
        }

        .movie-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .movie-card:hover .movie-overlay {
          opacity: 1;
        }

        .rating-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(100, 255, 218, 0.9);
          color: #0c0c0c;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .movie-info {
          padding: 1.5rem;
        }

        .movie-title {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .movie-title a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .movie-title a:hover {
          color: #64ffda;
        }

        .movie-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .movie-year {
          color: #64ffda;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .movie-genres {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .genre-tag {
          background: rgba(255, 107, 157, 0.2);
          color: #ff6b9d;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 107, 157, 0.3);
        }

        @media (max-width: 768px) {
          .movie-poster {
            height: 350px;
          }

          .movie-title {
            font-size: 1.1rem;
          }

          .movie-details {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover_image: PropTypes.string.isRequired,
};

export default Movie;
