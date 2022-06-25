import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import NavBar from './components/navBar/NavBar';
import MovieDetail from './components/movieDetail/MovieDetail';
import MovieList from './components/movieList/MovieList';
import FetchMovies from './components/utils/FetchMovies';

function App() {
  
 

  return (

    <BrowserRouter>

      <NavBar />
        <Routes>
          
          <Route exact path= '/' element = {<FetchMovies />} />

          <Route exact path='/rating/:rate_average' element = {<MovieList />} />

          <Route exact path='/movie/:id' element = {<MovieDetail />} />

        </Routes>

    </BrowserRouter>
  );
}

export default App;
