import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./firebase";
const TinderCards = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const unsubscribe = database
			.collection("people")
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			);
		return () => {
			// this is the clean up
			unsubscribe();
		};
	}, []);

	return (
		<div>
			<div className="tinderCards__cardContainer">
				{people.map((person, idx) => (
					<TinderCard key={idx} className="swipe" preventSwipe={[]}>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;
