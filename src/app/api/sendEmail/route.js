import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async(req, res) => {

    const {email,subject,message} = await req.json()
    console.log(email,"email");
  
    // Create a transporter object using your email service provider's details.
    const transporter = nodemailer.createTransport({
    service:'gmail',
        auth: {
            user: "asolinmaso22@gmail.com",
            pass: "yavu irtx nkxz gjaq",
        },
        
    });

    // Email content
    const mailDataToYou  = {
        from: 'noreply@abc.com',
        to: "asolinmaso22@gmail.com",
        subject: `From ${email}`,
        text: subject + ' Sent from: ' + email,
        html: `<div>${email} Sent you an Message.<br><span style="font-weight:700">Subject:</span>${subject}<br><span style="font-weight:700">Message:</span> ${message}</div>`,
    };
    const mailDataToSender = {
        from: 'noreply@abc.com',
        to: email,
        subject: 'Thank you for contacting!',
        text: 'Thank you for reaching out',
        html: `<div style="font-weight:700">Thank you for reaching out!</div>`,
    };
    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailDataToYou, (err, info) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log('Email sent to you successfully');
                    console.log(info);
                    resolve();
                }
            });
        });

        // Send thank-you email to the sender
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailDataToSender, (err, info) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log('Thank-you email sent to sender successfully');
                    console.log(info);
                    resolve();
                }
            });
        });

        // If both emails are sent successfully, send a successful response
        return new NextResponse();
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal server error', {
            status: 500
          });
    }
}

