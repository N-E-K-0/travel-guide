import React from 'react';
import Button from './Button';

const Card = ({id,name,src,details}) => {
	return (

		<div className=
			'tc w-30 bg-white dib br3 pa3 ma2 bw2 shadow-5'
		>
			<img src= {src} alt ='place' />
			<div>
				<h2>{name}</h2>
				<Button name={name} src={src} details={details}/>
			</div>
		</div>

	)
}

export default Card; 