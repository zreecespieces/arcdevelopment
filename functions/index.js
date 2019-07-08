/* eslint-disable */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: ""
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting info by query string
    const dest = req.query.dest;
    const subject = req.query.subj;
    const name = req.query.name;
    const number = req.query.number;
    const email = req.query.email;
    const message = req.query.message;

    const estimate = req.query.estimate;
    const service = req.query.service;
    const platforms = req.query.platforms;
    const features = req.query.features;
    const customFeatures = req.query.customFeatures;
    const users = req.query.users;
    const category = req.query.category;

    const mailOptions = {
      from: "Arc Development <testing.mailer@arcsoftwaredevelopment.com>",
      to: dest,
      subject: subject,
      html: `<p style="font-size: 16px;">From: ${name}</p>
             <p style="font-size: 16px;">Phone Number: ${number}</p>
             <p style="font-size: 16px;">Email: ${email}</p>
             <p style="font-size: 16px;">Message: ${message}</p>
             <p style="font-size: 16px;">Service: ${service}</p>
             <p style="font-size: 16px;">Platforms: ${platforms}</p>
             <p style="font-size: 16px;">Features: ${features}</p>
             <p style="font-size: 16px;">Custom Features: ${customFeatures}</p>
             <p style="font-size: 16px;">Users: ${users}</p>
             <p style="font-size: 16px;">Category: ${
               category ? category : "Not a website"
             }</p>
             <p style="font-size: 16px;">Estimate: ${estimate}</p>
            `
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send("Something went wrong!");
      }
      return res.send("Message sent successfully");
    });
  });
});
