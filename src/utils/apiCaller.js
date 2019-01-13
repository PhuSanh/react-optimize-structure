import axios from "axios";

const API_URL = process.env.CREATE_APP_API_URL;

let headers = {};

export const getApi = ({ endpoint, body = null }) => {
	const url = (!body || Object.keys(body).length === 0) ? endpoint : `${endpoint}?${URLStringify(body)}`;
	return axios({
			method: "GET",
			url: `${API_URL}/${url}`,
			headers
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
	})
}

export const postApi = ({ endpoint, body = null }) => {
	return axios({
		method: "POST",
		url: `${API_URL}/${endpoint}`,
		data: body,
		headers
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
	})
}

export const callApi = ({ endpoint, method = 'GET', body = null }) => {
	return axios({
		method: method,
		url: `${API_URL}/${endpoint}`,
		data: body
	}).then(res => {
		return res.data;
	}).catch(err => {
		console.log(err);
	})
}


const URLStringify = body => {
	const result = Object.keys(body).map(key => {
		const value = body[key];
		return `${key}=${value}`;
	});
	return result.join("&");
}