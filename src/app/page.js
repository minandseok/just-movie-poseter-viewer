"use client";

import { useEffect, useState } from "react";
import Movie from "@/components/Movie";

export default function Root() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">🎬 Movie Poster Viewer</h1>

      {loading ? (
        <div className="loading">Movies are coming</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genres={movie.genres}
              cover_image={movie.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
