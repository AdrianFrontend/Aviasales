import "./Card.scss";
import PropTypes from "prop-types";

const Card = ({ price, company, segments }) => {
	let ticketSegments = segments.map((item) => {
		let startDate = new Date(item.date);
		let endDate = new Date(startDate.getTime() + item.duration * 60000);

		let startHours = startDate.getUTCHours();
		let startMinutes = startDate.getUTCMinutes();
		let endHours = endDate.getUTCHours();
		let endMinutes = endDate.getUTCMinutes();
		let startTime = `${String(startHours).length === 1 ? `0${startHours}` : startHours}:${
			String(startMinutes).length === 1 ? `0${startMinutes}` : startMinutes
		}`;
		let endTime = `${String(endHours).length === 1 ? `0${endHours}` : endHours}:${
			String(endMinutes).length === 1 ? `0${endMinutes}` : endMinutes
		}`;

		let timeInFly = `${Math.ceil(item.duration / 60)}ч ${Math.ceil(item.duration % 60)}м`;

		let stopsValue =
			item.stops.length === 0
				? "Без пересадок"
				: item.stops.length === 1
				? "1 пересадка"
				: `${item.stops.length} пересадки`;
		let stopsPoints = item.stops.length > 0 ? item.stops.join(", ") : "Без пересадок";

		return (
			<div className="card-row" key={item.duration * Math.random()}>
				<div className="card-column">
					<span className="card-column__gray">
						{item.origin} – {item.destination}
					</span>
					<span className="card-column__black">
						{startTime} – {endTime}
					</span>
				</div>
				<div className="card-column">
					<span className="card-column__gray">В пути</span>
					<span className="card-column__black">{timeInFly}</span>
				</div>
				<div className="card-column">
					<span className="card-column__gray">{stopsValue}</span>
					<span className="card-column__black">{stopsPoints}</span>
				</div>
			</div>
		);
	});

	return (
		<li className="Card">
			<div className="Card__header">
				<span className="Card__price">{price} Р</span>
				<img className="Card__company-logo" src={`https://pics.avs.io/99/36/${company}.png`} />
			</div>
			{ticketSegments}
		</li>
	);
};

Card.propTypes = {
	price: PropTypes.number,
	company: PropTypes.string,
	segments: PropTypes.array,
};

export default Card;
