import { useEffect } from "react";
import "./Filters.scss";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";

const Filters = ({
	filters,
	loading,
	toggleAll,
	toggleWithoutTransfers,
	toggleOneTransfer,
	toggleTwoTransfers,
	toggleThreeTransfers,
	filterTickets,
}) => {
	useEffect(() => {
		if (
			filters.without &&
			filters.oneTransfer &&
			filters.twoTransfers &&
			filters.threeTransfers &&
			filters.all === false
		) {
			toggleAll(true);
		}
		filterTickets(filters);
	}, [filters.without, filters.oneTransfer, filters.twoTransfers, filters.threeTransfers]);

	useEffect(() => {
		filterTickets(filters);
	}, [loading]);

	let filtersStatuses = [
		filters.all,
		filters.without,
		filters.oneTransfer,
		filters.twoTransfers,
		filters.threeTransfers,
	];
	const filtersToggleFunctions = [
		toggleAll,
		toggleWithoutTransfers,
		toggleOneTransfer,
		toggleTwoTransfers,
		toggleThreeTransfers,
	];
	const filtersTitles = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];

	const filtersJSX = filtersTitles.map((item, idx) => {
		return (
			<Checkbox
				title={item}
				checked={filtersStatuses[idx]}
				onChangeFunc={filtersToggleFunctions[idx]}
				key={idx * Math.random()}
			/>
		);
	});

	return (
		<div className="Filters">
			<span className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
			{filtersJSX}
		</div>
	);
};

Filters.propTypes = {
	filters: PropTypes.object,
	loading: PropTypes.bool,
	toggleAll: PropTypes.func,
	toggleWithoutTransfers: PropTypes.func,
	toggleOneTransfer: PropTypes.func,
	toggleTwoTransfers: PropTypes.func,
	toggleThreeTransfers: PropTypes.func,
	filterTickets: PropTypes.func,
};

export default Filters;
