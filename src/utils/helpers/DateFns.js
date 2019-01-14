import format from "date-fns/format";

export const formatDate = (date, dateFormat = "DD/MM/YYYY") => {
	const [year, month, day] = (date.split(" ")[0]).split("-");
	return format(new Date(year, month, day), dateFormat)
}