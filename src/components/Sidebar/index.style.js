import styled from 'styled-components';

import {
	mainColor
} from "../../constants/Styles";

export const WrapSideBar = styled.div`
	width: 220px;
	position: fixed;
	z-index: 2;
	left: -220px;
	top: 0;
	height: 100%;
	background-color: #2A3F53;
	color: #fff;
	transition: all .2s;
	overflow-y: scroll;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
	&::-webkit-scrollbar {
		display: none;
	}
	&.show {
		left: 0;
	}
`;

export const SidebarTitle = styled.div`
	background-color: ${mainColor};
	height: 50px;
	text-align: center;
	line-height: 50px;
`;

export const WrapAvatar = styled.div`
	padding: 30px 15px;
	background-image: url("/img/sidebar_bg_1.jpg");
	height: 50px;
	background-size: 100% 100%;
	position: relative;
`;

export const UserAvatar = styled.img`
	position: absolute;
	bottom: 10px;
	color: #000;
	user-select: none;
	border: 2px solid rgba(28, 136, 229, 0.5);
	font-size: 25px;
	border-radius: 50%;
	height: 50px;
	width: 50px;
`;

export const Username = styled.span`
	position: absolute;
	top: 15px;
	display: block;
	color: white;
	font-weight: 300;
	font-size: 15px;
`;