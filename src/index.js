import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	appReducers,
	composeEnhancer(applyMiddleware(thunk)),
);

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"Roboto",
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Arial",
			"sans-serif"
		].join(","),
		useNextVariants: true
	}, // use this for ignore warning deprecated
  palette: {
    primary: {
			main: "#008FE5"
		}
  }
})

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>
	, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
