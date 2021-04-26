import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Components/MovieCard";
import { v4 as uuidv4 } from "uuid";
import StarRatingComponent from "react-star-rating-component";
import { Card, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Button } from "bootstrap";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";
import { Route,  Switch } from "react-router-dom";
import Description from "./Components/Description";
import Trailer from "./Components/Trailer";


function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      posterURL: "/icarealot.jpg",
      title: "I Care a Lot",
      description:
        " A crooked legal guardian who drains the savings of her elderly wards meets her match when a woman she tries to swindle turns out to be more than she first appears",
      Rate: 4,
      trailer: "https://www.youtube.com/embed/4lkCCo63nhM"
    },
    {
      id: uuidv4(),
      posterURL: "/badboys.jpg",
      title: "BAD BOYS FOR LIFE",
      description:
        "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
      Rate: 5,
      trailer:"https://www.youtube.com/embed/jKCj3XuPG8M"
    },

    {
      id: uuidv4(),
      posterURL: "/batman.jpg",
      title: "The Dark Knight Rises",
      description:
        "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      Rate: 4,
      trailer:"https://www.youtube.com/embed/z5Humz3ONgk"
    },
    {
      id: uuidv4(),
      posterURL: "/badtrip.jpg",
      title: "Very Bad Trip 3",
      description:
        "Very Bad Trip 3 (The Hangover Part III), ou Lendemain de veille 3 au Québec et au Nouveau-Brunswick, est un film américain de Todd Phillips sorti en 2013. C'est le dernier volet de la série Very Bad Trip.",
      Rate: 5.5,
      trailer:"https://www.youtube.com/embed/4Men6KBnFF4"
    },
  ]);

  const [movieSearch, setMovieSearch] = useState("");
  const [rateSearch, setRatingSearch] = useState("");

  function add(newMovie) {
    setMovies([...movies, newMovie]);
  }

  return (
    <div className="App">
      
      
      
      <AddMovie addMovie={add}></AddMovie>
      <Filter
        setMovieSearch={setMovieSearch}
        rateSearch={rateSearch}
        setRatingSearch={setRatingSearch}
      />
        <Switch>
        <Route path="/trailer/:id" render ={(props)=><Trailer {...props} movies={movies}></Trailer>} />
          <Route exact path="/" render={()=><MovieList  movies={movies.filter((movie) =>
          movie.title
            .toLocaleLowerCase()
            .trim()
            .includes(movieSearch.toLocaleLowerCase().trim())
        )} ></MovieList>} />

          <Route path="/description/:id" render ={(props)=><Description {...props} movies={movies}></Description>} />
        </Switch>
        

      
    
      {/* <MovieList
        movies={movies.filter((movie) =>
          movie.title
            .toLocaleLowerCase()
            .trim()
            .includes(movieSearch.toLocaleLowerCase().trim())
        )}
      ></MovieList> */}
     
    </div>
  );
}
export default App;
