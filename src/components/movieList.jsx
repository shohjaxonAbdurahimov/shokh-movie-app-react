import React from 'react'

const  MovieList = (props ) =>{
    return (
        <>
            {props.movies.map((movie, index) => {
              return(
                <div>
  
  <img className='flex' src={movie.Poster} alt="img" />


</div>
              )
            })}
        </>
    )
}
   

export default MovieList