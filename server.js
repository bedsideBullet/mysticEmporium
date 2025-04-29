const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
	service: "gmail", // Use your email provider
	auth: {
		user: "your-email@gmail.com", // Replace with your email
		pass: "your-email-password", // Replace with your email password or app password
	},
});

// Handle form submissions
app.post("/signup", (req, res) => {
	const { email } = req.body;

	const mailOptions = {
		from: "your-email@gmail.com", // Replace with your email
		to: email,
		subject: "Welcome to the Arcane Circle!",
		text: `Thank you for signing up for the Mystic Emporium! Use the coupon code "MAGIC25" to get 25% off your first purchase.`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email:", error);
			res.status(500).send("Failed to send email.");
		} else {
			console.log("Email sent:", info.response);
			res.send("Email sent successfully!");
		}
	});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
