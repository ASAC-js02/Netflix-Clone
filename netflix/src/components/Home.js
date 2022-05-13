import MovieList from './MovieList';
import { useEffect } from "react";
import { useState } from "react";
// import "./style.css"

function Home() {

    const [data, setdata] = useState([]);

    const getData = async () => {
        
            const respons= await fetch('https://movie-js02.herokuapp.com/trending')
            const rRender = await respons.json();
          
            setdata(rRender)
           
            

         

    }
    useEffect(() => {
        getData();
    } , [])


    return (
        <>
            <h1>Netflix Clone</h1>
            {
               (data.length>0) && <MovieList movie={data}/>
            }

            
        </>
    )
}
export default Home