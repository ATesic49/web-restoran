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

  var mailOptions = {
    from: email,
    to: "atesic7@gmail.com",
    subject: `Stigla je poruka od ${ime} , ${email}`,
    text: poruka,
  };
  console.log("EMAIL OPCIJE RADE");
  try {
    const mail = await transporter.sendMail(
      mailOptions,
      function (error: any, info: any) {
        if (error) {
          console.log("NEGDE JE DOSLO DO GRESKE");
          throw new Error(`error: ${error} , info:${info.response}`);
        } else {
          console.log("Email sent: " + info.response);
          return Response.json({ status: "Sve je proslo kako treba" });
        }
      }
    );
    throw new Error("nesto je pogresnooo");
  } catch (e) {
    console.log(e);
    return Response.json({ status: "greska" });
  }
}
