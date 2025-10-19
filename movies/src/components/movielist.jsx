import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "./movieCard";

const MovieList = (props) => {
  return (
    <Grid container spacing={3}>
      {props.movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} selectFavorite={props.selectFavorite} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
