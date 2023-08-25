const ALL = "ALL";
const WITHOUT_TRANSFERS = "WITHOUT-TRANSFERS";
const ONE_TRANSFER = "ONE-TRANSFER";
const TWO_TRANSFERS = "TWO-TRANSFERS";
const THREE_TRANSFERS = "THREE-TRANSFERS";

let initialState = {
	all: true,
	without: true,
	oneTransfer: true,
	twoTransfers: true,
	threeTransfers: true,
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALL:
			if (!action.value) {
				return {
					all: false,
					without: false,
					oneTransfer: false,
					twoTransfers: false,
					threeTransfers: false,
				};
			}
			return {
				all: true,
				without: true,
				oneTransfer: true,
				twoTransfers: true,
				threeTransfers: true,
			};
		case WITHOUT_TRANSFERS:
			if (state.all) {
				return { ...state, all: false, without: action.value };
			} else {
				return { ...state, without: action.value };
			}
		case ONE_TRANSFER:
			if (state.all) {
				return { ...state, all: false, oneTransfer: action.value };
			} else {
				return { ...state, oneTransfer: action.value };
			}
		case TWO_TRANSFERS:
			if (state.all) {
				return { ...state, all: false, twoTransfers: action.value };
			} else {
				return { ...state, twoTransfers: action.value };
			}
		case THREE_TRANSFERS:
			if (state.all) {
				return { ...state, all: false, threeTransfers: action.value };
			} else {
				return { ...state, threeTransfers: action.value };
			}
		default:
			return state;
	}
};

export const toggleAll = (value) => ({ type: ALL, value });
export const toggleWithoutTransfers = (value) => ({ type: WITHOUT_TRANSFERS, value });
export const toggleOneTransfer = (value) => ({ type: ONE_TRANSFER, value });
export const toggleTwoTransfers = (value) => ({ type: TWO_TRANSFERS, value });
export const toggleThreeTransfers = (value) => ({ type: THREE_TRANSFERS, value });

export default filtersReducer;
