const nodemailer = require("nodemailer");

transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "hmmotors425@gmail.com",
    pass: "jzkdrvczxgxeprvj",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});
module.exports = transporter;
