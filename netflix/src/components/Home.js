import MovieList from './MovieList';
import { useEffect } from "react";
import { useState } from "react";


function Home() {
    const [data, setdata] = useState();

    const fetchData = async () => {
        try {
            const respons= await fetch(` https://movie-js02.herokuapp.com/trending`)
           
            

            const rRender = await respons.json();
          
            setdata(rRender)
           
            console.log("shams",rRender)

        } catch (error) {
            console.log("error", error);
        }

    }
    useEffect(() => { fetchData(); }, [])


    return (
        <>
            <p>Home</p>

            <MovieList mData={data}/>
        </>
    )
}
export default Home