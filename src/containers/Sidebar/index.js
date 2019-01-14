import React, { Component } from "react";

import { connect } from "react-redux";

import Sidebar from "../../components/Sidebar";

class SidebarContainer extends Component {

	render () {

		const { sidebar } = this.props;
		// const username = auth.user.username || auth.user.user_name;

		return (
			<Sidebar
				isShow={sidebar.isShow}
				// username={username}
				username="Test thoi nha"
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar,
		auth: state.auth
	}
}

export default connect(mapStateToProps, null)(SidebarContainer);