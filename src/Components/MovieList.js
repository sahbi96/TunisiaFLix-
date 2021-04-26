import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
function MovieList (props){
   
    return(
        
        
       <div className="card1">
           {props.movies.map(el=><MovieCard movie={el}></MovieCard>)}
           
       </div>
       
    )
   
    
}

export default MovieList;
