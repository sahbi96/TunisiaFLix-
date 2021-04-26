import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <Card
      className="card"
      style={{
        width: "18rem",
        height:"590px",
        backgroundColor: "grey",
      }}
    >
      
      
      <Card.Img style = {{height:"370px"}} variant="Card" src={movie.posterURL} />
      
      <Card.Body>
        <Card.Title >{movie.title}</Card.Title>
        
        <StarRatingComponent
          name="Rate"
          starCount={5}
          value={movie.Rate}
          emptyStarColor={"white"}
        />
      
      </Card.Body>
      
    
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Link to={`/description/${movie.id}`}>
        <Button variant="primary">More info</Button>
        </Link>
        <Link to ={`/trailer/${movie.id}`}>
      <Button variant="primary"> Trailer</Button>
      </Link>
      </div>
      

      
    </Card>
  );
}
export default MovieCard;
