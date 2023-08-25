import { useEffect } from "react";
import Card from "./Card/Card";
import "./CardsList.scss";
import PropTypes from "prop-types";

const CardsList = ({ tickets, loading, getTicketsThunk }) => {
	useEffect(() => {
		getTicketsThunk();
	}, []);

	if (!tickets) {
		return <span>Loading...</span>;
	}

	const cards = tickets.map((item) => (
		<Card
			price={item.price}
			company={item.carrier}
			segments={item.segments}
			key={item.price * Math.random() * Math.random()}
		/>
	));

	return (
		<ul className="CardsList">
			{cards}
			{cards.length === 0 ? <span>Рейсов, подходящих под заданные фильтры, не найдено</span> : null}
			{loading ? <span>Loading...</span> : null}
		</ul>
	);
};

CardsList.propTypes = {
	tickets: PropTypes.array,
	loading: PropTypes.bool,
	getTicketsThunk: PropTypes.func,
};

export default CardsList;
