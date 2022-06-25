import React from "react";

const urlImg = "https://image.tmdb.org/t/p/w500/";

const MovieDetail = ({id, title, poster_path, vote_average, realese_date, overview }) => {

    return(
        <div key={id}>

            <h1>{title}</h1>
            <img src={urlImg + poster_path} alt = {title} />
            <p>{overview}</p>
            <p>Realease date: {realese_date}</p>
            <p>Rate: {vote_average}</p>

        </div>
    )
}

export default MovieDetail;