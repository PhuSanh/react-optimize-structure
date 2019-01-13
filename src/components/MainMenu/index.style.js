import styled from "styled-components";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export const MenuNavLink = styled(NavLink)`
	color: #fff;
	font-size: 14px;
	display: block;
	padding: 13px 0 13px 15px;
	transition: all .2s;
	cursor: pointer;
	position: relative;
	background-color: ${props => props.ischosen === "true" ? "#334656 !important" : "transparent"};
	text-decoration: none;
`;

export const ParentSubMenu = styled.a`
	color: #fff;
	font-size: 14px;
	display: block;
	padding: 13px 0 13px 15px;
	transition: all .2s;
	cursor: pointer;
	position: relative;
	text-decoration: none !important;
`;

export const ListMainMenu = styled.ul`
	padding: 0;
	
`;

export const SubMenuArrow = styled(KeyboardArrowRightIcon)`
	&& {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 16px;
	}
`;

export const ListSubMenu = styled.ul`
	&& {
		padding: 0;
		height: 0;
		overflow: hidden;
		transition: all .3s;
		${MenuNavLink} {
			padding: 13px 0 13px 30px;
			background-color: #223444;
			text-decoration: none;
		}
	}
`;

export const MenuLi = styled.li`
	list-style-type: none;
	text-align: left;
	&:hover > ${MenuNavLink}, &:hover > ${ParentSubMenu} {
		background-color: #334656;
	}
	&.active {
		background-color: #334656;
	}
	${ListMainMenu} > &.active ${SubMenuArrow} {
		transform: translateY(-50%) rotate(90deg);
	}
	${ListMainMenu} > &.active ${ListSubMenu} {
		height: auto;
	}
`;