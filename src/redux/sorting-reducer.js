const THE_CHEAPEST = "THE-CHEAPEST";
const THE_FASTEST = "THE-FASTEST";
const OPTIMAL = "OPTIMAL";

let initialState = {
	sorting: null,
};

const sortingReducer = (state = initialState, action) => {
	switch (action.type) {
		case THE_CHEAPEST:
			return { sorting: THE_CHEAPEST };
		case THE_FASTEST:
			return { sorting: THE_FASTEST };
		case OPTIMAL:
			return { sorting: OPTIMAL };
		default:
			return state;
	}
};

export const toggleTheCheapest = () => ({ type: THE_CHEAPEST });
export const toggleTheFastest = () => ({ type: THE_FASTEST });
export const toggleOptimal = () => ({ type: OPTIMAL });

export default sortingReducer;
