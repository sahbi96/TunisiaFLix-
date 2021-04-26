import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from '../App'
import MovieList from '../Components/MovieList'
import MovieCard from '../Components/MovieCard'

const Trailer = ({ movies,match }) => {
  const [movie, setMovie]=useState(null);
    
    useEffect(()=>{
               setMovie(movies.find(el=>el.id===match.params.id))
    },[]); 
  return (
    <div>
      <br/>
      <br/>
      <h1 style = {{color:"white"}}>  {movie && movie.title}</h1>
     
      <br/>
     
      <div>
        
      </div>
      <div>
        <br/>
      <iframe width="570" height="362" src={movie && movie.trailer} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
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

export default Trailer;