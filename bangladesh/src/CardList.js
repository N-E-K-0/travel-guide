import React from 'react';
import Card from './Card';

const CardList= ({place}) => {

	return (
		<div>
			{
				place.map((user, i) => {
					return (
						<>
							<Card
								key={i} 
								id={place[i].id} 
								name={place[i].name}
								src={place[i].src}
								details={place[i].details}  
							/>
						</>
					); 
				})
			}
		</div>
	
		)
	}

export default CardList;