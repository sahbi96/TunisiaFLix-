import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import { v4 as uuidv4 } from "uuid";


const AddMovie = ({ addMovie }) => {
  
  const [posterURL, setPosterURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Rate, setRate] = useState("");
  const [id, setId] = useState(uuidv4());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
 const handleMovieAdd =() =>{
   addMovie({title,description,Rate,id,posterURL})
   handleClose()
 }


  
  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
        Add a new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", color: "blue" }}>
            ADD A NEW MOVIE{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Support us with adding a movie and thanks !</Modal.Body>
        <Modal.Body>
          <div className="container-fluid contenedor text-center">
            <Form className="needs-validation" noValidate>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="prenom">Type your movie title here</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="nom">Drop the image of the movie here</label>
                  <input
                    type="text"
                    className="form-control"
                    value={posterURL}
                    onChange={(e) => setPosterURL(e.target.value)}
                    placeholder=".jpg/png"
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="pseudo">Put the rate of the movie</label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    value ={Rate}
                    placeholder="Rate"
                    onChange={(e) => {
                      setRate(parseInt(e.target.value));
                    }}
                    required
                  />{" "}
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="ville">
                    Type the description of the movie here
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                  />

                  {/* <button type="button" class="btn btn-primary mt-3 ml-5">
                    Submit
                  </button> */}
                </div>
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleMovieAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
