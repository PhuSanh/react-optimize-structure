import asyncComponent from "../components/AsyncComponent";

export default [
	{
		path: "/error",
		exact: true,
		main: asyncComponent(() => import("../pages/NotFound").then(module => module.default))
	},
	{
		main: asyncComponent(() => import("../pages/NotFound").then(module => module.default))
	}
];