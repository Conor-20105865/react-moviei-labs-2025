import React from "react";
import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MovieCard = ({ movie }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        height: 500, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.vote_average} | {movie.release_date}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
          {movie.overview.length > 100
            ? movie.overview.slice(0, 100) + "..."
            : movie.overview}
        </Typography>

        {}
        <div style={{ marginTop: "auto", textAlign: "center" }}>
          <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
