import { useEffect } from "react";
import Card from "./Card/Card";
import "./CardsList.scss";
import PropTypes from "prop-types";

const CardsList = ({ allTickets = [], tickets, loading, getTicketsThunk, haveMore }) => {
	useEffect(() => {
		getTicketsThunk();
	}, []);

	if (allTickets.length === 0) {
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
			{loading ? <span>Loading...</span> : null}
			{cards.length === 0 ? <span>Рейсов, подходящих под заданные фильтры, не найдено</span> : null}
			{haveMore ? (
				cards.length === 0 ? null : (
					<button onClick={getTicketsThunk} className="get-more-button">
						Показать ещё 500 билетов!
					</button>
				)
			) : null}
		</ul>
	);
};

CardsList.propTypes = {
	tickets: PropTypes.array,
	loading: PropTypes.bool,
	getTicketsThunk: PropTypes.func,
	allTickets: PropTypes.array,
	haveMore: PropTypes.bool,
};

export default CardsList;
