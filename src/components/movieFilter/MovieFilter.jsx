import React, { useEffect, useState } from "react";
import  {FetchMovies}  from "../utils/FetchMovies";
import { useParams } from "react-router-dom"
import Rate from "../ranting/Rate";

export default function MovieFilter() {
  const [movies, setMovies] = useState([]);
  const {average_vote} = useParams ();

  useEffect(() => {
    FetchMovies
        .then(
          (resp) => {
            if(average_vote){
          
            setMovies(resp.filter(m => m.parseInt(average_vote) > 0 && m.parseInt(average_vote) < 2 ))
          
          }else if(average_vote){

            setMovies(resp.filter(m => m.parseInt(average_vote) > 2 && m.parseInt(average_vote) < 4 ))

          }else if(average_vote){

            setMovies(resp.filter(m => m.parseInt(average_vote) > 4 && m.parseInt(average_vote) < 6 ))

          }else if(average_vote){

            setMovies(resp.filter(m => m.parseInt(average_vote) > 6 && m.parseInt(average_vote) < 8 ))

          }else if(average_vote){

            setMovies(resp.filter(m => m.parseInt(average_vote) > 8 && m.parseInt(average_vote) < 10 ))

          }else{
            setMovies(resp)
          }
          }
            
        )
  },[average_vote]);

  return (
    <>
      <Rate movie={movies} />
    </>
  );
}
