const nodemailer = require("nodemailer");

export default {
	async fetch(request, env, ctx) {
		return new Response("Hello World!");
	},
};
