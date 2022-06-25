import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../movieDetail/MovieDetail";
import FetchMovies from "../utils/FetchMovies";

export default function MovieDetailCotainer() {
    const [movie, setMovie] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
        FetchMovies
        .then(res => setMovie(res.find(movie => movie.id === Number(id))))
        .catch(error => console.log(error));
  },[id])
        return (
            <>
               <MovieDetail {...movie} />
            </>
        )
    }