var nodemailer = require("nodemailer");
const authEmail = require("../controllers/authEmail.json");

exports.sendEmailConfirmation = async (req, res) => {
  try {
    console.log("confirmation came");
    let user = req.body;
    if (!user) {
      res.status(404).json({ error: "The file does not exit" });
    }
    res.send(
      `<div style="    font-family: 'Roboto Mono', monospace; font-size: 14px; font-weight: 500;">
            <h3>Dear | Estimado ${user.name},</h3>
            <h3>I have sent you a confirmation email | Te he enviado un correo de confirmación.</h3>
            <h3>Please check your spam mailbox | Porfavor revisa tu buzon de no deseados.</h3>
            <br>
            <h3>Kindest regards | Saludos,</h3>
            <h3>Luis Lopez</h3></div>`
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};
exports.sendEmail = async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    if (!user) {
      res.status(404).json({ error: "The file does not exit" });
    }
    sendEmail(user, (info) => {
      console.log(`The email was sent to ${info.name}`);
      res.send(info);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: authEmail.user, // generated ethereal user
      pass: authEmail.pass, // generated ethereal password
    },
  });
  console.log("auth worked");

  let mailOptions = {
    from: "Luis López", // sender address
    to: [
      user.email,
      "IngLuisFernandoLopez@hotmail.com",
      "developerluislopez@gmail.com",
    ], // list of receivers
    subject: "I received your message | Recibí tu mensaje!", // Subject line
    // text: "Hello world?", // plain text body
    html: `<div style="    font-family: 'Roboto Mono', monospace; font-size: 14px; font-weight: 500;">
            <h3>Dear | Estimado ${user.name},</h3>
            <h3>Thanks for contacting me | Gracias por comunicarte conmigo.</h3>
            <br>
            <h3>I confirm that I have received your message and I will reply as soon as possible | 
            Te confirmo que he recibido tu mensaje y te responderé en el menor tiempo posible.</h3>
            <h3>Your message was | Tu mensaje fue:</h3>
            <h3>"${user.message}"</h3>
            <br>
            <h3>Kindest regards | Saludos,</h3>
            <h3>Luis Lopez</h3></div>`, // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
