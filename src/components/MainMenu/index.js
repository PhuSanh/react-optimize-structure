import React, { Component } from 'react';

import { ListMainMenu, MenuLi, MenuNavLink, ParentSubMenu, ListSubMenu, SubMenuArrow } from "./index.style";

const SubMenu = props => {
	const { subs, subParent, activeId, activeParentId, onToggleSubMenu, onActive } = props;
	return (
		<ListSubMenu className="sub-menu">
			{ subs.map(sub => {
				const { label, to } = sub;
				const id = subParent ? subParent : to;
				return (
					<MenuLink
						key={label}
						label={label}
						to={to}
						id={id}
						activeId={activeId}
						parentId={subParent}
						activeParentId={activeParentId}
						onToggleSubMenu={onToggleSubMenu}
						onActive={onActive}
						activeOnlyWhenExact={sub.activeOnlyWhenExact ? true : false} />
				);
			})}
		</ListSubMenu>
	);
}

const setTitle = label => {
	document.title = label;
}

const MenuLink = props => {

	const {
		label, to, subs, id, parent,
		activeId, parentId, activeParentId,
		onToggleSubMenu, onActive,
		activeOnlyWhenExact = false
	} = props;

	const isActiveParent = id === activeParentId;
	const isActive = id === activeId;
	let menu;

	if(to) {
		menu = (<MenuNavLink ischosen={isActive.toString()} onClick={e => onActive(parentId, id, label)} to={to}>{ label }</MenuNavLink>);
	} else {
		menu = (<ParentSubMenu onClick={() => onToggleSubMenu(id)}>
							{ label }
							<SubMenuArrow className="sub-menu-arrow" />
						</ParentSubMenu>);
	}

	return (
		<MenuLi className={`my-li ${isActiveParent ? "active" : ""}`}>
			{ menu }
			{ (subs && subs.length > 0) ? (
					<SubMenu
						subs={subs}
						subParent={parent}
						activeId={activeId}
						activeParentId={activeParentId}
						onToggleSubMenu={onToggleSubMenu}
						onActive={onActive}
					/>
			 	) : null }
		</MenuLi>
	);
}

const menus = [
	{label: "Dashboard", to: "/", activeOnlyWhenExact: true},
	{
		label: "Thông tin chung", parent: "master_data", subs: [
			{ label: "Nhân viên", to: "/user" },
			{ label: "Cửa hàng", to: "/shop" },
			{ label: "Sản phẩm phế liệu", to: "/item" },
			{ label: "Cấp bậc", to: "/role" },
			{ label: "Nơi thu gom", to: "/supplier" },
			{ label: "Nhà máy", to: "/warehouse" }
		]
	},
	{ label: "Yêu cầu thu gom", to: "/collection-request" },
	{ label: "Lịch thu gom", to: "/collection-schedule" },
	{ label: "Saleman report", to: "/saleman-report" },
	{ label: "Thông tin bán hàng", to: "/selling-factory" },
]

class MainMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeParentId: -1,
			activeId: -1
		}
	}

	onActive = (parentId, id, label) => {
		this.setState({
			activeParentId: parentId,
			activeId: id
		});
		setTitle(label);
	}

	onToggleSubMenu = (id) => {
		this.setState(prevState => ({
			activeParentId: prevState.activeParentId === id ? -1 : id,
			activeId: -1
		}));
	}

	render() {
		const { activeId, activeParentId } = this.state;
		return(
			<ListMainMenu id="main-menu">
				{ menus.map((menu, index) => {
					const { label, to, subs, parent } = menu;
					const id = parent ? parent : to;
					return (
						<MenuLink
							key={label}
							label={label}
							to={to}
							subs={subs}
							id={id}
							activeId={activeId}
							parentId={parent}
							activeParentId={activeParentId}
							onToggleSubMenu={this.onToggleSubMenu}
							onActive={this.onActive}
							activeOnlyWhenExact={menu.activeOnlyWhenExact ? true : false} />
					)
				})}
			</ListMainMenu>
		);
	}
}

export default MainMenu;