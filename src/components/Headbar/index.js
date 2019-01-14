import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

import {
	WrapHeadbar,
	HeadbarLeft,
	HeadbarPageTitle,
	WrapDigitalClock,
	WrapMenuIcon,
} from "./index.style";
import MobileDetect from "../../utils/helpers/MobileDetect";

const Headbar = props => {

	const {
		isShowSidebar,
		anchorSettingMenu,
		onCloseSettingMenu,
		onOpenSettingMenu,
		onToggleSidebar,
		onChangeRoute,
		onLogout
	} = props;

	return (
		<WrapHeadbar id="headbar" isShowSidebar={isShowSidebar}>
			<HeadbarLeft>
				<WrapMenuIcon onClick={onToggleSidebar} aria-label="Menu">
					<MenuIcon />
				</WrapMenuIcon>

				{/* <BrandLogo src="img/logo-vinamilk.png" /> */}
				{/* <p className="tool-title">{ t("management_tracking_tool") }</p> */}
			</HeadbarLeft>
			{!MobileDetect.isMobile() && (
				<HeadbarPageTitle>
					Thẻ vé điện tử
				</HeadbarPageTitle>
			)}
			<WrapDigitalClock>
				<IconButton id="logout" onClick={onOpenSettingMenu}>
					<SettingsIcon />
				</IconButton>
				<Menu
          id="simple-menu"
          anchorEl={anchorSettingMenu}
          open={Boolean(anchorSettingMenu)}
          onClose={onCloseSettingMenu}
        >
          <MenuItem onClick={() => onChangeRoute("/me/change-password")}>Đổi mật khẩu</MenuItem>
          <MenuItem onClick={() => onChangeRoute("/me/reset-password")}>Reset mật khẩu</MenuItem>
          <MenuItem onClick={onLogout}>Đăng xuất</MenuItem>
        </Menu>
			</WrapDigitalClock>
		</WrapHeadbar>
	);
}

export default Headbar;