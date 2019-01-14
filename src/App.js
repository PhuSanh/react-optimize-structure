import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";


import routes from "./routes";
import SidebarContainer from "./containers/Sidebar";
import HeadbarContainer from "./containers/Headbar";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			routes: this.generateRoutes()
		}
	}

	generateRoutes = () => {
		return routes.map((route, index) => (
			<Route
				key={ index }
				path={ route.path }
				exact={ route.exact }
				component={ route.main }
			/>
		))
	}

  render() {

		const {
			routes
		} = this.state;

		const { sidebar } = this.props;

    return (
      <div className={"App " + (sidebar.isShow ? "fixed-sidebar" : "")}>
				<HeadbarContainer />
        <SidebarContainer />
				<div id="main-app">
					<Switch>
						{ routes }
					</Switch>
					<NotificationContainer />
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		sidebar: state.sidebar,
	}
}

export default withRouter(connect(mapStateToProps, null)(App));
