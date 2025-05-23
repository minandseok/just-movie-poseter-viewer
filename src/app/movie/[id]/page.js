"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function MovieDetail() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      getMovie();
    }
  }, [params.id]);

  if (loading) {
    return <div className="loading">Movie is coming</div>;
  }

  if (!movie) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Movie not found</h2>
          <button
            onClick={() => router.push("/")}
            className="back-btn">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button
        onClick={() => router.push("/")}
        className="back-btn">
        ← Back to Movies
      </button>

      <div className="movie-detail">
        <div className="movie-poster-section">
          <img
            src={movie.large_cover_image}
            alt={`${movie.title} poster`}
            className="detail-poster"
          />
        </div>

        <div className="movie-content">
          <h1 className="detail-title">{movie.title}</h1>

          <div className="movie-meta">
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">{movie.year}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Rating</span>
              <span className="meta-value">⭐ {movie.rating}/10</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Runtime</span>
              <span className="meta-value">{movie.runtime} min</span>
            </div>
          </div>

          <div className="genres-section">
            <h3>Genres</h3>
            <div className="genres-list">
              {movie.genres?.map((genre, index) => (
                <span
                  key={index}
                  className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="description-section">
            <h3>Description</h3>
            <p className="description">{movie.description_full}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .back-btn {
          background: rgba(100, 255, 218, 0.1);
          border: 2px solid #64ffda;
          color: #64ffda;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .back-btn:hover {
          background: #64ffda;
          color: #0c0c0c;
          transform: translateX(-5px);
        }

        .error-message {
          text-align: center;
          padding: 4rem 2rem;
        }

        .error-message h2 {
          color: #ff6b9d;
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .movie-detail {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-top: 2rem;
        }

        .movie-poster-section {
          display: flex;
          justify-content: center;
        }

        .detail-poster {
          width: 100%;
          max-width: 400px;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease;
        }

        .detail-poster:hover {
          transform: scale(1.05);
        }

        .movie-content {
          padding: 1rem 0;
        }

        .detail-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #64ffda 0%, #ff6b9d 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .movie-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .meta-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .meta-label {
          display: block;
          color: #64ffda;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .meta-value {
          display: block;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .genres-section,
        .description-section {
          margin-bottom: 3rem;
        }

        .genres-section h3,
        .description-section h3 {
          color: #ff6b9d;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .genres-list {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .genre-tag {
          background: rgba(255, 107, 157, 0.2);
          color: #ff6b9d;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          border: 1px solid rgba(255, 107, 157, 0.3);
          font-size: 0.9rem;
        }

        .description {
          color: #e0e0e0;
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 800px;
        }

        @media (max-width: 1024px) {
          .movie-detail {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .detail-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .detail-title {
            font-size: 2rem;
          }

          .movie-meta {
            grid-template-columns: 1fr;
          }

          .back-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
