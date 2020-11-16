const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "690aef9e9b936a",
    pass: "ad2e45323f09fc"
  }
});
