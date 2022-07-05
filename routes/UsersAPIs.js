const app = require("express").Router();
const crypto = require("crypto");
const transporter = require("./mailTransporter");
const Users = require("../models/UsersModel");
const Chats = require("../models/ChatModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret } = require("../utils/utils");

// Login / Register API's
async function sendWelcomeMail(email) {
  try {
    output = `<h1>Welcome ${user.fName}  ${user.lName}</h1>
      <h3>We Welcome you to HM Motors family , Thanks for joining in to our business</h3>`;
    await transporter.sendMail({
      from: '"HM Motors" hmmotors425@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Welcome To HM Motors", // Subject line
      html: output, // html body
    });
  } catch (err) {
    console.log(`Welcome Email not sent to user: ${email}`);
    console.log(err);
  }
}

app.post("/sign-up", async (req, res) => {
  try {
    if (
      !(req.body.email && req.body.password && req.body.fName && req.body.lName)
    ) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }
    const hash = bcrypt.hashSync(req.body.password, 5);
    user = await Users.create({
      email: req.body.email,
      password: hash,
      fName: req.body.fName,
      lName: req.body.lName,
      cNumber: req.body.cNumber,
    });
    admin = await Users.findOne({ role: "admin" }).select("_id");
    var chat = await Chats.create({
      client_id: user._id,
      admin_id: admin._id,
      chat: [],
    });
    chat.save();
    await Users.findOneAndUpdate({ _id: user._id }, { chat: chat._id });
    if (user) {
      sendWelcomeMail(user.email);
    }
    res.status(201).send({ status: "OK" });
  } catch (error) {
    res.status(409).send({ status: "error", message: "Already Exists" });
  }
});
app.post("/login", async function (req, res, next) {
  const body = req.body;
  var user = await Users.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        secret
      );

      return res.status(200).json({
        status: "OK",
        user: token,
        userId: user._id,
        userRole: user.role,
      });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});
app.post("/sendEmail", async (req, res) => {
  const body = req.body;

  try {
    const output = `
  <h1>You have a new Contact Details </h1>
  <h3>Contact Details</h3>
  <ul>
    <li>First Name : ${body.fName}</li>
    <li>Last Name : ${body.lName}</li>
    <li>Email : ${body.email}</li>
    <li>Subject : ${body.subject}</li>
    <li>Contact Number : ${body.cNumber}</li>
  </ul>
  <h3>Message : ${body.message}</h3>
  `;
    try {
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"HM Motors" hmmotors425@gmail.com', // sender address
        to: "hmmotors425@gmail.com", // list of receivers
        subject: "Contact Message", // Subject line
        html: output, // html body
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

// Password Reset API

app.post("/reset-password", async (req, res) => {
  const body = req.body;
  crypto.randomBytes(64, (err, buffer) => {
    if (err) {
      console.log(err);
    } else {
      const token = buffer.toString("hex");
      user = Users.findOne({
        email: body.email,
      }).then(async (user) => {
        if (user) {
          user.resetToken = token;
          user.expireToken = Date.now() + 720000;
          await user.save().then(async (result) => {
            output = `<h1>Password Reset For User ${user.fName}  ${user.lName}</h1>
            <h3><a href=${window.location.hostname}/reset-password/${token}>Click Me</a> to Reset Password (It is Usable for Only 30 Minutes)</h3>`;
            await transporter.sendMail({
              from: '"HM Motors" hmmotors425@gmail.com', // sender address
              to: user.email, // list of receivers
              subject: "Reset Password", // Subject line
              html: output, // html body
            });
            return res.json({
              status: "OK",
              message: "Reset Link Sent To user Email",
            });
          });
        } else {
          return res.sendStatus(404);
        }
      });
    }
  });
});
app.post("/new-password", async (req, res) => {
  const body = req.body;
  newPassword = body.password;
  token = body.token;
  user = Users.findOne({
    resetToken: body.token,
    expireToken: {
      $gte: Date.now(),
    },
  })
    .then(async (user) => {
      if (!user) {
        return res.sendStatus(422);
      } else {
        const hash = bcrypt.hashSync(newPassword, 5);
        user.password = hash;
        user.resetToken = null;
        user.expireToken = null;
        await user.save().then((user) => {
          return res.json({
            status: "OK",
            message: "Password Updated",
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = app;
