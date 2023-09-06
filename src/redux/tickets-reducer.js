import { API } from "../API/API";

const UPDATE_TICKETS = "UPDATE-TICKETS";
const SORT_TICKETS = "SORT-TICKETS";
const STOP = "STOP";
const FILTER_TICKETS = "FILTER-TICKETS";
const SET_ERROR = "SET-ERROR";

let initialState = {
	tickets: [],
	sortedTickets: [],
	filteredTickets: null,
	loading: true,
	haveMore: true,
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TICKETS: {
			let newAllTickets = [...state.sortedTickets, ...action.tickets];

			return {
				tickets: newAllTickets,
				sortedTickets: newAllTickets,
				filteredTickets: state.filteredTickets,
				loading: true,
				haveMore: state.haveMore,
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
				filteredTickets: allTicketsCopy,
				loading: false,
				haveMore: state.haveMore,
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
				haveMore: state.haveMore,
			};
		}
		case STOP: {
			return {
				...state,
				loading: false,
				haveMore: false,
			};
		}
		case SET_ERROR: {
			return {
				...state,
				error: true,
			};
		}
		default:
			return state;
	}
};

export const updateTickets = (tickets) => ({ type: UPDATE_TICKETS, tickets });
export const sortTickets = (method) => ({ type: SORT_TICKETS, method });
export const filterTickets = (filters) => ({ type: FILTER_TICKETS, filters });
export const setError = () => ({ type: SET_ERROR });
const stop = () => ({ type: STOP });

export const getTicketsThunk = () => async (dispatch) => {
	const searchId = await API.getSearchId();

	API.getTickets(searchId.searchId)
		.then((responce) => {
			dispatch(updateTickets(responce.tickets));

			if (responce.stop) {
				dispatch(stop());
			}
		})
		.catch((error) => {
			console.log(`Ошибка: ${error}`);
			dispatch(setError());
		});
};

export default ticketsReducer;
