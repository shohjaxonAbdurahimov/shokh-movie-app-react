import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result m-auto "  onClick={() => openPopup(result.imdbID)}>
			<img  src={result.Poster} />
			<h3 className='text-red-700 '>{result.Title}
			<p text-red-700 > Year : {result.Year}</p>
			
			
			</h3>
		</div>
	)
}

export default Result