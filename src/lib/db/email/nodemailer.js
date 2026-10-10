
import nodemailer from "nodemailer";
//establish conection with gmail

const transporter = nodemailer.createTransport({
       host:"smtp.gmail.com",
        port:"587",
        service:"gmail",
        auth: {
            user: "fatemhmohammed23@gmail.com",
            pass: "123456"
        }
    });

export function sendEmail(to, subject, html) {
    

    return transporter.sendMail({
        from: '"NGL-APP" <fatemhmohammed23@gmail.com>',
        to: to,
        subject: subject,
        html: html
    });
}