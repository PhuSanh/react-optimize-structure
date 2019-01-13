import asyncComponent from "../components/AsyncComponent";

export default [
	{
		path: "/role",
		exact: true,
		main: asyncComponent(() => import("../containers/Role").then(module => module.default))
	}
];