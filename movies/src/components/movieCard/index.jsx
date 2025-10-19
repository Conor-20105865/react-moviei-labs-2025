import React from "react";
import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MovieCard = (props) => {
  const movie = props.movie;

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    props.selectFavorite(movie.id);
  };

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
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {movie.vote_average} | {movie.release_date}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
          {movie.overview.length > 100
            ? movie.overview.slice(0, 100) + "..."
            : movie.overview}
        </Typography>

        <div style={{ marginTop: "auto", textAlign: "center" }}>
          <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>

          <IconButton aria-label="add to favorites" onClick={handleAddToFavorite}>
            <FavoriteIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
