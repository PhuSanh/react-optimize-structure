import { NotificationManager } from "react-notifications";

export default ({ type, title = "", message = "Thông báo", timeout = 5000, callback }) => {
	const messageType = ["info", "success", "warning", "error"].includes(type) ? type : "info";
	return NotificationManager[messageType](message, title, timeout);
}