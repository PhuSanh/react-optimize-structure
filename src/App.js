import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import SidebarContainer from "./containers/Sidebar";
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

    return (
      <div className="App">
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

export default App;
