import { API } from "../API/API";

const UPDATE_TICKETS = "UPDATE-TICKETS";
const SORT_TICKETS = "SORT-TICKETS";
const STOP = "STOP";
const FILTER_TICKETS = "FILTER-TICKETS";

let initialState = {
	tickets: [],
	sortedTickets: [],
	filteredTickets: [],
	loading: true,
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TICKETS: {
			let allTickets = [...structuredClone(state.sortedTickets)];
			let newAllTickets = [...allTickets, ...action.tickets];

			return {
				tickets: newAllTickets,
				sortedTickets: newAllTickets,
				loading: true,
			};
		}
		case SORT_TICKETS: {
			let allTicketsCopy = structuredClone(state.tickets);

			if (action.method === "THE-CHEAPEST") {
				allTicketsCopy.sort((a, b) => a.price - b.price);
			}
			if (action.method === "THE-FASTEST") {
				allTicketsCopy.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
			}

			return {
				tickets: state.tickets,
				sortedTickets: allTicketsCopy,
				filteredTickets: state.filteredTickets,
				loading: true,
			};
		}
		case FILTER_TICKETS: {
			let filteredTickets = [];

			if (action.filters.all) {
				state.sortedTickets.forEach((item) => filteredTickets.push(item));
			} else {
				if (action.filters.without) {
					state.sortedTickets.forEach((item) =>
						item.segments[0].stops.length === 0
							? filteredTickets.push(item)
							: item.segments[1].stops.length === 0
							? filteredTickets.push(item)
							: null
					);
				}
				if (action.filters.oneTransfer) {
					state.sortedTickets.forEach((item) =>
						item.segments[0].stops.length === 1
							? filteredTickets.push(item)
							: item.segments[1].stops.length === 1
							? filteredTickets.push(item)
							: null
					);
				}
				if (action.filters.twoTransfers) {
					state.sortedTickets.forEach((item) =>
						item.segments[0].stops.length === 2
							? filteredTickets.push(item)
							: item.segments[1].stops.length === 2
							? filteredTickets.push(item)
							: null
					);
				}
				if (action.filters.twoTransfers) {
					state.sortedTickets.forEach((item) =>
						item.segments[0].stops.length === 3
							? filteredTickets.push(item)
							: item.segments[1].stops.length === 3
							? filteredTickets.push(item)
							: null
					);
				}
			}

			return {
				tickets: state.tickets,
				sortedTickets: state.sortedTickets,
				filteredTickets: filteredTickets,
				loading: false,
			};
		}
		case STOP: {
			return {
				...state,
				loading: false,
			};
		}
		default:
			return state;
	}
};

export const updateTickets = (tickets) => ({ type: UPDATE_TICKETS, tickets });
export const sortTickets = (method) => ({ type: SORT_TICKETS, method });
export const filterTickets = (filters) => ({ type: FILTER_TICKETS, filters });
const stop = () => ({ type: STOP });

export const getTicketsThunk = () => async (dispatch) => {
	const searchId = await API.getSearchId();

	function recursiveGetTickets() {
		API.getTickets(searchId.searchId)
			.then((responce) => {
				dispatch(updateTickets(responce.tickets));

				if (responce.stop) {
					dispatch(stop());
					return;
				}
				recursiveGetTickets();
			})
			.catch(() => {
				recursiveGetTickets();
			});
	}

	recursiveGetTickets();
};

export default ticketsReducer;
