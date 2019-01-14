import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleSidebar } from "../../actions/sidebar.action";
import Headbar from "../../components/Headbar";
import Cookie from "../../utils/helpers/Cookie";

class HeadbarContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			anchorSettingMenu: null
		}
	}

	onToggleSidebar = () => {
		this.props.toggleSidebar();
	}

	onLogout = () => {
		Cookie.remove("u");
		Cookie.remove("i");
		window.location.reload();
	}

	onOpenSettingMenu = e => {
		this.setState({
			anchorSettingMenu: e.currentTarget
		})
	}

	onCloseSettingMenu = () => {
		this.setState({
			anchorSettingMenu: null
		})
	}

	onChangeRoute = to => {
		this.onCloseSettingMenu();
		this.props.history.push(to);
	}

	render () {

		const { sidebar } = this.props;
		const { anchorSettingMenu } = this.state;

		return (
			<Headbar
				isShowSidebar={sidebar.isShow}
				anchorSettingMenu={anchorSettingMenu}
				onToggleSidebar={this.onToggleSidebar}
				onLogout={this.onLogout}
				onOpenSettingMenu={this.onOpenSettingMenu}
				onCloseSettingMenu={this.onCloseSettingMenu}
				onChangeRoute={this.onChangeRoute}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		toggleSidebar:() => {
			dispatch(toggleSidebar());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeadbarContainer));