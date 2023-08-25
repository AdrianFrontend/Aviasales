import { connect } from "react-redux";
import {
	toggleAll,
	toggleWithoutTransfers,
	toggleOneTransfer,
	toggleTwoTransfers,
	toggleThreeTransfers,
} from "../../redux/filters-reducer";
import { filterTickets } from "../../redux/tickets-reducer";
import Filters from "./Filters";

let mstp = (state) => ({
	filters: state.filters,
	loading: state.tickets.loading,
});

export default connect(mstp, {
	toggleAll,
	toggleWithoutTransfers,
	toggleOneTransfer,
	toggleTwoTransfers,
	toggleThreeTransfers,
	filterTickets,
})(Filters);
