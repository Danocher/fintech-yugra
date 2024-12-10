'use server'
interface Mails{
    subject: string,
    phonenumber: string
}
export async function sendMails({ subject, phonenumber}:Mails){
console.log( subject, phonenumber)
console.log(process.env.MAIL, process.env.MAIL_KEY)
const text = `Запрос на обратную связь от ${new Date()}, Перезвоните по номеру ${phonenumber}`
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_KEY,
    },
});
try{
    await transporter.sendMail({
        from: 'zakroma86@mail.ru',
        to: 'radx945@gmail.com',
        subject: subject,
        text: text,
    });
}
catch(error: any){
    console.log(error);}

}