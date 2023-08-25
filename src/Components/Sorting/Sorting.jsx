import { useEffect } from "react";
import "./Sorting.scss";
import { filterTickets } from "../../redux/tickets-reducer";
import PropTypes from "prop-types";

const Sorting = ({ sorting, filters, toggleTheCheapest, toggleTheFastest, toggleOptimal, sortTickets }) => {
	useEffect(() => {
		filterTickets(filters);
	}, [sorting]);

	const createClasses = (name) => {
		if (sorting === name) {
			return "Sorting__button Sorting__button--active";
		}
		return "Sorting__button";
	};

	const onToggleTheCheapest = () => {
		if (sorting != "THE-CHEAPEST") {
			toggleTheCheapest();
			sortTickets("THE-CHEAPEST");
		}
	};
	const onToggleTheFastest = () => {
		if (sorting != "THE-FASTEST") {
			toggleTheFastest();
			sortTickets("THE-FASTEST");
		}
	};
	const onToggleOptimal = () => {
		if (sorting != "OPTIMAL") {
			toggleOptimal();
			sortTickets("OPTIMAL");
		}
	};

	return (
		<div className="Sorting">
			<button className={createClasses("THE-CHEAPEST")} onClick={onToggleTheCheapest}>
				САМЫЙ ДЕШЕВЫЙ
			</button>
			<button className={createClasses("THE-FASTEST")} onClick={onToggleTheFastest}>
				САМЫЙ БЫСТРЫЙ
			</button>
			<button className={createClasses("OPTIMAL")} onClick={onToggleOptimal}>
				ОПТИМАЛЬНЫЙ
			</button>
		</div>
	);
};

Sorting.propTypes = {
	sorting: PropTypes.string,
	filters: PropTypes.array,
	toggleTheCheapest: PropTypes.func,
	toggleTheFastest: PropTypes.func,
	toggleOptimal: PropTypes.func,
	sortTickets: PropTypes.func,
};

export default Sorting;
