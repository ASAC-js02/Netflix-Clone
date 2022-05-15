import Movie from './Movie'
import { Button, Row, Container } from 'react-bootstrap';

export default function MovieList(props) {
    
    return (
        <>
        <Container fluid className="main-container" >
                <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
        {
       props.movie.map((movie)=> {
         return(
             <>
             <Movie movie={movie} updateRecipe={props.updateMovie}/>
             
             </>
         )

        })

        }
         </div>
            </Container>
        </>
    )
}
