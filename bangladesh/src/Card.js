import React from 'react';

const Card = ({id,name,src}) => {
	return (

		<div className=
			'tc w-30 bg-white dib br3 pa3 ma2 grow bw2 shadow-5'
		>
			<img src= {src} alt ='place' />
			<div>
				<h2>{name}</h2>
			</div>
		</div>

	)
}

export default Card; 