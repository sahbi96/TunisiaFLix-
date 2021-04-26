import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from '../App'
import MovieList from '../Components/MovieList'
import MovieCard from '../Components/MovieCard'

const Description = ({ movies,match }) => {
  const [movie, setMovie]=useState(null);
    
    useEffect(()=>{
               setMovie(movies.find(el=>el.id===match.params.id))
    },[]); 
  return (
    <div>
      <h1 style = {{color:"white"}}> Title: {movie && movie.title}</h1>
      <h3 style = {{color:"grey"}}> Description :{movie && movie.description} </h3>
      <br/>
      <br/>
      <br/>
      <div>
        
        <img style = {{height:"300px"}} src={movie && movie.posterURL} alt="posterURL" />
<br/>
      </div>
      <div>
        <br/>
     
      </div>
    
     <br/>
     <br/>
     <br/>
      <Link to="/">
        <button  type="button" className="btn btn-success">
          Back to home
        </button>
      </Link>
    
    </div>
  );
};

export default Description;
