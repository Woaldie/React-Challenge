import React, { useState, useEffect} from "react";
import MovieList from "../movieList/MovieList";
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=bd076da609ead66ef8863e793d382139&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

export default function FetchMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then(data =>{
            setMovies(data.results)
        })
    }, []) 
        return (
            <>
               {movies.map((movieData)=>
               <MovieList key={movieData.id} {...movieData}/>)}
            </>
        )
    }