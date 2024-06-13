import nodemailer from "nodemailer";

export async function POST(request: Request) {
	console.log("POSLAT JE REQUEST");
	const { ime, email, poruka } = await request.json();

	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "atesic7@gmail.com",
			pass: "igea elti hugs heys",
		},
	});

	let mailOptions = {
		from: email,
		to: "atesic7@gmail.com",
		subject: `Stigla je poruka od ${ime} , ${email}`,
		text: poruka,
	};

	let mailOptions2 = {
		from: email,
		to: "atesic7@gmail.com",
		subject: `Stigla je poruka od ${ime} , ${email}`,
		text: poruka,
	};
	console.log("EMAIL OPCIJE RADE");
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent: " + info.response);
		return Response.json({ status: "Email uspešno poslat." });
	} catch (e: any) {
		console.log("Negde je doslo do greske");
		console.error(e.message);
		return Response.json({ status: "greska" });
	}
}
