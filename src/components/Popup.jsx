import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup text-2xl">
			<div className="content">

				<div className="left-popup">
					<p className="rating text-3xl w-[600px]">Rating: {selected.imdbRating}</p>
					<img src={selected.Poster} />
				</div>
				<div className='right-popup text-xl'>
					<h2 className='mt-6'>
						The name of the movie : {selected.Title}</h2>
					<p className='mt-5 max-[700px] '>{selected.Plot}</p>
					<span className='year mt-6' > Movies Year : {selected.Year}</span>
					<h3 className='mt-5'>Type : {selected.Type}</h3>
					<button className="close btn btn-secondary mt-10" onClick={closePopup}>Close</button>
				</div>

			</div>
		</section>
	)
}

export default Popup