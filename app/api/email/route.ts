import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { ime, email, poruka } = await request.json();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "atesic7@gmail.com",
      pass: process.env.PASS,
    },
  });

  var mailOptions = {
    from: email,
    to: "atesic7@gmail.com",
    subject: `Pozdrav ${ime}`,
    text: poruka,
  };
  try {
    const mail = transporter.sendMail(
      mailOptions,
      function (error: any, info: any) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    return Response.json({ status: "Sve je proslo kako treba" });
  } catch (e) {
    console.log(e);
    return Response.json({ status: "greska" });
  }
}
