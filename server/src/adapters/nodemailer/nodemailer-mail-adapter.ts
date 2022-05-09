import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "453b38c40d7233",
      pass: "6e3f54ed0c4c89"
    }
  });


export class NodeMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendEmailData){
    
    await transport.sendMail({
        from: 'Equipe do FeedGet <leonardostanchak@hotmail.com>',
        to : 'Leonardo Stanchak <leonardostanchak01@hotmail.com>',
        subject,
        html: body,
    });
    }
}