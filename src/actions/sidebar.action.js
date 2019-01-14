import * as Types from "./../constants/ActionType";

export const toggleSidebar = () => {
	return {
		type: Types.TOGGLE_SIDEBAR
	}
}

export const setMenu = (menu) => {
	return {
		type: Types.SET_MENU,
		menu
	}
}