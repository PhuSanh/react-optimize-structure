import React from "react";

import MainMenu from "../MainMenu";
import {
	WrapSideBar,
	SidebarTitle,
	WrapAvatar,
	UserAvatar,
	Username
} from "./index.style";

const Sidebar = props => {

	const { isShow, username, menu } = props;

	return (
		<WrapSideBar className={isShow ? "show" : "hide"}>
			<SidebarTitle>
				Thẻ vé điện tử
			</SidebarTitle>
			<WrapAvatar>
				<UserAvatar src="/img/profile.png" />
				<Username>
					Chào { username },
				</Username>
			</WrapAvatar>
			<MainMenu menu={menu} />
		</WrapSideBar>
	)
}

export default Sidebar;
