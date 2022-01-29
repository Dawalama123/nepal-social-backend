import nodemailer from 'nodemailer';

export const sendEmailVerify = async (subject: string, to: string, html: string) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'dawasoftwarica@gmail.com',
            pass: 'softwarica123'
        }
    });


    const mailOptions = {
        from: 'dawasoftwarica@gmail.com',
        to: to,
        subject: subject,
        html: html,
    };

    await transporter.sendMail( mailOptions );

} 