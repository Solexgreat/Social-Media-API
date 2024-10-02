const nodemailer = require('nodemailer')


exports.sendEmail = async (to, subject, text) => {

	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user:	process.env.EMAIL_USER,
				pass:	process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to,
			subject,
			text,
		}

		await transporter.sendMail(mailOptions);
		console.log('Email sent successfully')
	} catch (err) {
		console.error('Error sending the email', err.message)
	}
}