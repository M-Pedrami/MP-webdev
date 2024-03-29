import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'awildroot@gmail.com',
    pass: process.env.APP_PASS

  }
});


export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;
  if(!name || !email || !message){
    return NextResponse.json({message: "Please Fill Out All the Fields"}, {status: 500})
  }
  const response = { name, email, message };
  const mailOptions = {
    sender: {
      name: body.name, // Use the destructured name from the request
      address: 'awildroot@gmail.com', // Use your authenticated email address
    },  
    to: 'awildroot@gmail.com',
    subject: `${name} @ ${email}`,
    text: message
  };
  await transporter.sendMail(mailOptions)
  return NextResponse.json({message: "Email Sent", data: response }, { status: 200 });
}
