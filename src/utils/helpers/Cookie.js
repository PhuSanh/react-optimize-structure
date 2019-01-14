export default {
	get: name => {
		const value = "; " + document.cookie;
		let parts = value.split("; " + name + "=");
		if (parts.length === 2) return parts.pop().split(";").shift();
	},

	set: (name, value, days = 7) => {
		let expires = "";
		if (days) {
				const date = new Date();
				date.setTime(date.getTime() + (days*24*60*60*1000));
				expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	},

	remove: name => {
		document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}