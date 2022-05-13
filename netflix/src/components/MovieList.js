import Movie from './Movie'



function MovieList(props) {
    let data = props.mData
    return (
        <>
            {console.log(data)}

                {
                    data && data.map((m) => {
                        return (
                            <Movie data={m} key={m.id} />
                        )
                    })
                }

        </>
    )
}
export default MovieList