import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function FavMovie() {
    const [FavMovies, setFavMovies] = useState();

    async function GetMovieId(id) {
        let url = `https://movie-js02.herokuapp.com/`
        let response = await fetch(url, {
            method: 'GET'
        });

        let recivedData = await response.json();
        setFavMovies(recivedData)
    }

    async function handleDelete(id) {
        let url = `https://movie-prep-js.herokuapp.com/delete`;
        let response = await fetch(url, {
            method: 'DELETE',
        })
   

        if (response.status == 204) {
            GetMovieId();
            alert("Movie deleted successfully");
        }

    }


    useEffect(() => {
        GetMovieId();
    }, []);
    return (
        <>
            <h1>Favourite Movies Page</h1>
            {
                FavMovies && FavMovies.map((favMovie) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={favMovie.image} />
                            <Card.Body>
                                <Card.Title>{favMovie.title}</Card.Title>
                                
                                <Button variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                )
            }

        </>
    )
}
