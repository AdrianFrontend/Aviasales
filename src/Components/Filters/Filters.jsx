import { useEffect } from "react";
import "./Filters.scss";
import PropTypes from "prop-types";

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

	return (
		<div className="Filters">
			<span className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
			<label className="Filters__checkbox">
				<input type="checkbox" checked={filters.all} onChange={(event) => toggleAll(event.target.checked)} />
				<span className="Filters__checkbox-custom"></span>
				<span className="Filters__checkbox-title">Все</span>
			</label>
			<label className="Filters__checkbox">
				<input
					type="checkbox"
					checked={filters.without}
					onChange={(event) => toggleWithoutTransfers(event.target.checked)}
				/>
				<span className="Filters__checkbox-custom"></span>
				<span className="Filters__checkbox-title">Без пересадок</span>
			</label>
			<label className="Filters__checkbox">
				<input
					type="checkbox"
					checked={filters.oneTransfer}
					onChange={(event) => toggleOneTransfer(event.target.checked)}
				/>
				<span className="Filters__checkbox-custom"></span>
				<span className="Filters__checkbox-title">1 пересадка</span>
			</label>
			<label className="Filters__checkbox">
				<input
					type="checkbox"
					checked={filters.twoTransfers}
					onChange={(event) => toggleTwoTransfers(event.target.checked)}
				/>
				<span className="Filters__checkbox-custom"></span>
				<span className="Filters__checkbox-title">2 пересадки</span>
			</label>
			<label className="Filters__checkbox">
				<input
					type="checkbox"
					checked={filters.threeTransfers}
					onChange={(event) => toggleThreeTransfers(event.target.checked)}
				/>
				<span className="Filters__checkbox-custom"></span>
				<span className="Filters__checkbox-title">3 пересадки</span>
			</label>
		</div>
	);
};

Filters.propTypes = {
	filters: PropTypes.array,
	loading: PropTypes.bool,
	toggleAll: PropTypes.func,
	toggleWithoutTransfers: PropTypes.func,
	toggleOneTransfer: PropTypes.func,
	toggleTwoTransfers: PropTypes.func,
	toggleThreeTransfers: PropTypes.func,
	filterTickets: PropTypes.func,
};

export default Filters;
