import { connect } from "react-redux";
import { toggleTheCheapest, toggleTheFastest, toggleOptimal } from "../../redux/sorting-reducer";
import { sortTickets, filterTickets } from "../../redux/tickets-reducer";
import Sorting from "./Sorting";

let mstp = (state) => ({
	sorting: state.sorting.sorting,
	filters: state.filters,
});

export default connect(mstp, { toggleTheCheapest, toggleTheFastest, toggleOptimal, sortTickets, filterTickets })(
	Sorting
);
