import React from "react";
import s from "./MovieList.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const urlImg = "https://image.tmdb.org/t/p/w500/";

const MovieList = ({
  title,
  poster_path,
  overview,
  id
}) => {
  return (
    <>
      <div className={s.container} align='center' >
        <Card sx={{ maxWidth: 345 }} className= {s.item} style={{ height: 500 }}>
          <CardActionArea >
            <CardMedia
              className={s.port}
              component="img"
              height="140"
              image={urlImg + poster_path}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={s.title} >
                {title}
              </Typography>
              <Typography  variant='body2' align='center' color="text.secondary" className={s.info} mt={1}  style={{ height:200, display: "inline-block", whiteSpace: "pre-line" }} >
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button variant="contained" size="small" className={s.btn} >
              <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'white', fontFamily: "sans-serif" }} >View More </Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default MovieList;
