import Modal from 'react-bootstrap/Modal'
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';

export default function ModalMovie(props){
let commentRef = useRef();
function handleComment(e) {
  e.preventDefault();
  let userComment = commentRef.current.value;
  console.log({ userComment });
  let newMovie = { ...props.chosenMovie, userComment };
   props.updateMovie (newMovie, props.chosenMovie.id)
}
 async function handleFavorite(e, movie){
   e.preventDefault();

   let url = `https://movie-js02.herokuapp.com/addMovie`

   let data = {
     title:movie.title,
     image : movie.poster_path
   }
let respons = await fetch(url, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  }, 
  body: JSON.stringify(data),
})
// let addedMovie = await response.json();
 }
 return(
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img width= '100%' src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}` } />
            <br />
            <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Entre you comment" />
                            <Form.Text className="text-muted">
                                Add your own comment about this Movie
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
                            Submit Comment
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e) => { handleFavorite(e, props.chosenMovie) }}>
                            Add to favorites
                        </Button>
                    </Form>
            </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
)

}