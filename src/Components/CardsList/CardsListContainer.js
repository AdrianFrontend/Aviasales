import { connect } from "react-redux";
import CardsList from "./CardsList";
import { getTicketsThunk } from "../../redux/tickets-reducer";

let mstp = (state) => ({
	allTickets: state.tickets.tickets,
	tickets: state.tickets.filteredTickets,
	loading: state.tickets.loading,
	haveMore: state.tickets.haveMore,
});

export default connect(mstp, { getTicketsThunk })(CardsList);
