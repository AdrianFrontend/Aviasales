import { connect } from "react-redux";
import CardsList from "./CardsList";
import { getTicketsThunk } from "../../redux/tickets-reducer";

let mstp = (state) => ({
	tickets: state.tickets.filteredTickets,
	loading: state.tickets.loading,
});

export default connect(mstp, { getTicketsThunk })(CardsList);
