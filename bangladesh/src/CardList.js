import React from 'react';
//import place from './Places';
import Card from './Card';

const CardList= ({place}) => {

	return (
		<div>
			{
				place.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={place[i].id} 
							name={place[i].name}
							src={place[i].src}  
						/>
					); 
				})
			}
		</div>
	
		)
	}

export default CardList;