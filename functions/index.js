/* eslint-disable */
const functions = require("firebase-functions");
const config = functions.config();
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
    user: config.mailerconfig.email,
    pass: config.mailerconfig.password
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting info by query string
    const dest = req.query.dest;
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

    var mailOptions;

    if (estimate) {
      if (dest === "zachary@arcsoftwaredevelopment.com") {
        mailOptions = {
          from: "Arc Development <noreply.arcdevelopment@gmail.com>",
          to: dest,
          subject: "Estimate Request!",
          html: `<p style="font-size: 16px;">From: ${name}</p>
                     <p style="font-size: 16px;">Phone Number: ${number}</p>
                     <p style="font-size: 16px;">Email: ${email}</p>
                     <p style="font-size: 16px;">Message: ${message}</p>
                     <p style="font-size: 16px;">Service: ${service}</p>
                     <p style="font-size: 16px;">Platforms: ${platforms}</p>
                     <p style="font-size: 16px;">Features: ${features}</p>
                     <p style="font-size: 16px;">Custom Features: ${customFeatures}</p>
                     <p style="font-size: 16px;">Users: ${users}</p>
                     ${
                       category
                         ? `<p style="font-size: 16px;">Category: ${category}</p>`
                         : `\n`
                     }
                     <p style="font-size: 16px;">Estimate: ${estimate}</p>
                    `
        };
      } else {
        mailOptions = {
          from: "Arc Development <noreply.arcdevelopment@gmail.com>",
          to: dest,
          subject: "We're excited about your project!",
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
          <html
            xmlns="http://www.w3.org/1999/xhtml"
            xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
          >
            <head>
              <!--[if gte mso 9]>
                <xml>
                  <o:OfficeDocumentSettings>
                    <o:AllowPNG />
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml>
              <![endif]-->
              <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link
                href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                rel="stylesheet"
              />
              <title></title>
              <style type="text/css">
                p {
                  margin: 0;
                  padding: 0;
                }
                table {
                  border-collapse: collapse;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                  display: block;
                  margin: 0;
                  padding: 0;
                }
                img,
                a img {
                  border: 0;
                  height: auto;
                  outline: none;
                  text-decoration: none;
                }
                body,
                #bodyTable,
                #bodyCell {
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  width: 100%;
                }
                #outlook a {
                  padding: 0;
                }
                img {
                  -ms-interpolation-mode: bicubic;
                }
                table {
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                }
                .ReadMsgBody {
                  width: 100%;
                }
                .ExternalClass {
                  width: 100%;
                }
                p,
                a,
                li,
                td,
                blockquote {
                  mso-line-height-rule: exactly;
                }
                a[href^="tel"],
                a[href^="sms"] {
                  color: inherit;
                  cursor: default;
                  text-decoration: none;
                }
                p,
                a,
                li,
                td,
                body,
                table,
                blockquote {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                  line-height: 100%;
                }
                a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: none !important;
                  font-size: inherit !important;
                  font-family: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                }
                @media only screen and (max-width: 480px) {
                  .m_device_width {
                    width: 100% !important;
                    min-width: 100% !important;
                    height: auto !important;
                  }
                  .mob_db {
                    display: block !important;
                  }
                  .text-center {
                    text-align: center !important;
                  }
                  .mob_hidden {
                    display: none !important;
                  }
                  .mob_ptb80lr20 {
                    padding: 80px 25px !important;
                  }
                  .h_auto {
                    height: auto !important;
                  }
                }
              </style>
            </head>
            <body align="center" style="margin:0; padding:0; background:#e5e5e5;">
              <table
                align="center"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="background:#e5e5e5"
                id="bodyTable"
              >
                <tr>
                  <td align="center" id="bodyCell">
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="background:#e5e5e5"
                      class="m_device_width"
                    >
                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td align="center">
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td align="center">
                                      <a
                                        href="http://www.arcsoftwaredevelopment.com/"
                                        target="_blank"
                                      >
                                        <img
                                          align="center"
                                          src="https://i.imgur.com/o1hebvN.jpg"
                                          alt="Arc Development"
                                          width="600"
                                          height=""
                                          style="width:600px; max-width:600px; display:block;"
                                          class="m_device_width"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td
                                align="center"
                                background="https://i.imgur.com/OOD0bZL.jpg"
                                bgcolor="#ffffff"
                                width="600"
                                height="617"
                                valign="top"
                                style="background-repeat:no-repeat;"
                                class="h_auto m_device_width"
                              >
                                <!--[if gte mso 9]>
          									<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
          									<v:fill type="tile" src="https://i.imgur.com/OOD0bZL.jpg" color="#ffffff" />
          									<v:textbox inset="0,0,0,0">
          									<![endif]-->
                                <div>
                                  <table
                                    align="center"
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        width="85"
                                        style="width:85px"
                                        class="mob_hidden"
                                      >
                                        <img
                                          align="center"
                                          src="https://i.imgur.com/HR1pI0g.gif"
                                          alt=""
                                          width="85"
                                          style="width:85px; display:block"
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:160px 0px"
                                        class="mob_ptb80lr20"
                                      >
                                        <table
                                          align="center"
                                          width="100%"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          style="background:#ffffff; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);"
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              style="padding:70px 35px 80px 35px"
                                            >
                                              <table
                                                align="center"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tr>
                                                  <td
                                                    align="center"
                                                    style="font-family: 'Pacifico', cursive; font-size:34.28px; font-weight:normal; line-height:35px; color:#0b72b9; text-align:center;"
                                                  >
                                                    We're ready.
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#868686; text-align:center;"
                                                  >
                                                    Thanks for placing your estimate
                                                    request. We'll go over the details and
                                                    get back to you as soon as possible.
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td
                                        align="center"
                                        width="85"
                                        style="width:85px"
                                        class="mob_hidden"
                                      >
                                        <img
                                          align="center"
                                          src="https://i.imgur.com/HR1pI0g.gif"
                                          alt=""
                                          width="85"
                                          style="width:85px; display:block"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <!--[if gte mso 9]>
          									</v:textbox>
          									</v:rect>
          									<![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td align="center">
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <th
                                      align="left"
                                      valign="middle"
                                      bgcolor="#000000"
                                      background="https://i.imgur.com/PSP1tQB.jpg"
                                      width="388"
                                      style="width:388px"
                                      class="mob_db m_device_width"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td align="center" style="padding:40px 10px">
                                            <table
                                              align="center"
                                              width="100%"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td
                                                  align="left"
                                                  width="18"
                                                  style="width:18px; padding:0px 0px 7px 0px"
                                                >
                                                  <img
                                                    align="left"
                                                    src="https://i.imgur.com/ZtalTud.png"
                                                    alt=""
                                                    width="18"
                                                    height="18"
                                                    style="width:18px; max-width:18px; display:block"
                                                  />
                                                </td>
                                                <td
                                                  align="left"
                                                  style="padding:0px 0px 7px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;"
                                                >
                                                  (316) 358-9320
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  width="18"
                                                  style="width:18px;"
                                                >
                                                  <img
                                                    align="left"
                                                    src="https://i.imgur.com/9T7w2Kv.png"
                                                    alt=""
                                                    width="18"
                                                    height="12"
                                                    style="width:18px; max-width:18px; display:block"
                                                  />
                                                </td>
                                                <td
                                                  align="left"
                                                  style="padding:0px 0px 0px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;"
                                                >
                                                  <a
                                                    href="mailto:zachary@arcsoftwaredevelopment.com"
                                                    style="color:#ffffff; text-decoration:none!important"
                                                    >zachary@arcsoftwaredevelopment.com</a
                                                  >
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </th>
                                    <th
                                      align="left"
                                      valign="middle"
                                      width="212"
                                      style="width:212px;background:#0b71b9"
                                      class="mob_db m_device_width"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td align="center" style="padding:15px 0px">
                                            <table
                                              align="center"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                >
                                                  <a
                                                    href="https://www.instagram.com/development_arc"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/auxeind.png"
                                                      alt=""
                                                      width="31"
                                                      height="31"
                                                      style="width:31px; max-width:31px; display:block"
                                                    />
                                                  </a>
                                                </td>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                >
                                                  <a
                                                    href="https://twitter.com/development_arc"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/QV0qmLC.png"
                                                      alt=""
                                                      width="30"
                                                      height="25"
                                                      style="width:30px; max-width:30px; display:block"
                                                    />
                                                  </a>
                                                </td>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                >
                                                  <a
                                                    href="https://www.facebook.com/"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/wPb7ijk.png"
                                                      alt=""
                                                      width="17"
                                                      height="31"
                                                      style="width:17px; max-width:17px; display:block"
                                                    />
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </th>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`
        };
      }
    } else {
      if (dest === "zachary@arcsoftwaredevelopment.com") {
        mailOptions = {
          from: "Arc Development <noreply.arcdevelopment@gmail.com>",
          to: dest,
          subject: "Message Received!",
          html: `<p style="font-size: 16px;">From: ${name}</p>
                     <p style="font-size: 16px;">Phone Number: ${number}</p>
                     <p style="font-size: 16px;">Email: ${email}</p>
                     <p style="font-size: 16px;">Message: ${message}</p>
                    `
        };
      } else {
        mailOptions = {
          from: "Arc Development <noreply.arcdevelopment@gmail.com>",
          to: dest,
          subject: "Thanks for contacting us",
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if gte mso 9]>
	<xml>
	<o:OfficeDocumentSettings>
	<o:AllowPNG/>
	<o:PixelsPerInch>96</o:PixelsPerInch>
	</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <title></title>
    <style type="text/css">
		p {
			margin: 0;
			padding: 0;
		}
			table{
			border-collapse:collapse;
		}
		h1,h2,h3,h4,h5,h6{
			display:block;
			margin:0;
			padding:0;
		}
		img,a img{
			border:0;
			height:auto;
			outline:none;
			text-decoration:none;
		}
		body,#bodyTable,#bodyCell{
			height:100%;
			margin:0;
			padding:0;
			width:100%;
		}
		#outlook a {
			padding:0;
		}
		img {
			-ms-interpolation-mode:bicubic;
		}
		table {
			mso-table-lspace:0pt;
			mso-table-rspace:0pt;
		}
		.ReadMsgBody {
			width:100%;
		}
		.ExternalClass{
			width:100%;
		}
		p,a,li,td,blockquote{
			mso-line-height-rule:exactly;
		}
		a[href^=tel],a[href^=sms]{
			color:inherit;
			cursor:default;
			text-decoration:none;
		}
		p,a,li,td,body,table,blockquote{
			-ms-text-size-adjust:100%;
			-webkit-text-size-adjust:100%;
		}
		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
			line-height:100%;
		}
		a[x-apple-data-detectors]{
			color:inherit !important;
			text-decoration:none !important;
			font-size:inherit !important;
			font-family:inherit !important;
			font-weight:inherit !important;
			line-height:inherit !important;
		}
		@media only screen and (max-width: 480px) {
			.m_device_width {
				width:100%!important;
				min-width:100%!important;
				height:auto!important;
			}
			.mob_db {
				display:block!important;
			}
			.text-center {
				text-align:center!important;
			}
			.mob_hidden {
				display:none!important;
			}
			.mob_ptb80lr20 {
				padding:80px 25px!important;
			}
			.h_auto {
				height:auto!important;
			}
        }
    </style>
</head>
<body align="center" style="margin:0; padding:0; background:#e5e5e5;">
	<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background:#e5e5e5" id="bodyTable">
		<tr>
			<td align="center" id="bodyCell">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background:#e5e5e5" class="m_device_width">

					<tr>
						<td align="center">
							<table align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="background:#000000" class="m_device_width">
								<tr>
									<td align="center">
										<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td align="center">
													<a href="http://www.arcsoftwaredevelopment.com/" target="_blank">
														<img align="center" src="https://i.imgur.com/o1hebvN.jpg" alt="Arc Development" width="600" height="" style="width:600px; max-width:600px; display:block;" class="m_device_width">
													</a>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td align="center">
							<table align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="background:#000000" class="m_device_width">
								<tr>
									<td align="center" background="https://i.imgur.com/OOD0bZL.jpg" bgcolor="#ffffff" width="600" height="617" valign="top" style="background-repeat:no-repeat;" class="h_auto m_device_width">
									<!--[if gte mso 9]>
									<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
									<v:fill type="tile" src="https://i.imgur.com/OOD0bZL.jpg" color="#ffffff" />
									<v:textbox inset="0,0,0,0">
									<![endif]-->
									<div>
										<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td align="center" width="85" style="width:85px" class="mob_hidden">
													<img align="center" src="https://i.imgur.com/HR1pI0g.gif" alt="" width="85" style="width:85px; display:block">
												</td>
												<td align="center" style="padding:160px 0px" class="mob_ptb80lr20">
													<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);">
														<tr>
															<td align="center" style="padding:85px 35px 110px 35px">
																<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td align="center" style="font-family: 'Pacifico', cursive; font-size:34.28px; font-weight:normal; line-height:35px; color:#0b72b9; text-align:center;">
																			Hello
																		</td>
																	</tr>
																	<tr>
																		<td align="center" style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#868686; text-align:center;">
																			Thanks for sending us a message! We’ll get back to you as soon as possible.
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
												<td align="center" width="85" style="width:85px" class="mob_hidden">
													<img align="center" src="https://i.imgur.com/HR1pI0g.gif" alt="" width="85" style="width:85px; display:block">
												</td>
											</tr>
										</table>
									</div>
									<!--[if gte mso 9]>
									</v:textbox>
									</v:rect>
									<![endif]-->
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td align="center">
							<table align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="background:#000000" class="m_device_width">
								<tr>
									<td align="center">
										<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<th align="left" valign="middle" bgcolor="#000000" background="https://i.imgur.com/PSP1tQB.jpg" width="388" style="width:388px" class="mob_db m_device_width">
													<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td align="center" style="padding:40px 10px">
																<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td align="left" width="18" style="width:18px; padding:0px 0px 7px 0px">
																			<img align="left" src="https://i.imgur.com/ZtalTud.png" alt="" width="18" height="18" style="width:18px; max-width:18px; display:block">
																		</td>
																		<td align="left" style="padding:0px 0px 7px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;">
																			(316) 358-9320
																		</td>
																	</tr>
																	<tr>
																		<td align="left" width="18" style="width:18px;">
																			<img align="left" src="https://i.imgur.com/9T7w2Kv.png" alt="" width="18" height="12" style="width:18px; max-width:18px; display:block">
																		</td>
																		<td align="left" style="padding:0px 0px 0px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;">
																			<a href="mailto:zachary@arcsoftwaredevelopment.com" style="color:#ffffff; text-decoration:none!important">zachary@arcsoftwaredevelopment.com</a>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
												<th align="left" valign="middle" width="212" style="width:212px;background:#0b71b9" class="mob_db m_device_width">
													<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td align="center" style="padding:15px 0px">
																<table align="center" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td align="center" style="padding:0px 14px">
																			<a href="https://www.instagram.com/development_arc" target="_blank">
																				<img align="center" src="https://i.imgur.com/auxeind.png" alt="" width="31" height="31" style="width:31px; max-width:31px; display:block">
																			</a>
																		</td>
																		<td align="center" style="padding:0px 14px">
																			<a href="https://twitter.com/development_arc" target="_blank">
																				<img align="center" src="https://i.imgur.com/QV0qmLC.png" alt="" width="30" height="25" style="width:30px; max-width:30px; display:block">
																			</a>
																		</td>
																		<td align="center" style="padding:0px 14px">
																			<a href="https://www.facebook.com/" target="_blank">
																				<img align="center" src="https://i.imgur.com/wPb7ijk.png" alt="" width="17" height="31" style="width:17px; max-width:17px; display:block">
																			</a>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>

</body>
</html>`
        };
      }
    }

    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error);
      }
      return res.send("Message sent successfully");
    });
  });
});
