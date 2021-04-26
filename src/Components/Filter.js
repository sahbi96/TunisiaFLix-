import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ setMovieSearch, rateSearch, setRatingSearch }) => {

  const handleSearchMovie =() =>{
    setMovieSearch({setMovieSearch,rateSearch})
  }
  return (
    <Navbar className="justify-content-between">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search your movie"
          onChange={(e) => setMovieSearch(e.target.value)}
          className=" mr-sm-2"
        ></FormControl>
        {/* <StarRatingComponent
         onStarClick={(nextValue, prevValue, name)=>setRatingSearch(nextValue)}
          rating={rateSearch}
         
        ></StarRatingComponent> */}
      
      </Form>
    </Navbar>
  );
};

export default Filter;
