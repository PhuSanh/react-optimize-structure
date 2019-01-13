import * as Types from './../constants/ActionType';

let initialState = {
	isShow: true,
};

const sidebar = (state = initialState, action) => {

	switch(action.type) {
		case Types.TOGGLE_SIDEBAR:
			return {
				...state,
				isShow: !state.isShow
			};
		default:
				return state;
	}

}

export default sidebar;