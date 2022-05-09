import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "453b38c40d7233",
      pass: "6e3f54ed0c4c89"
    }
  });

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    const feedback = await prisma.feedback.create({
        data:{
            type,
            comment,
            screenshot,
        }
    })
    await transport.sendMail({
        from: 'Equipe do FeedGet <leonardostanchak@hotmail.com>',
        to : 'Leonardo Stanchak <leonardostanchak01@hotmail.com>',
        subject: 'Novo feedback ',
        html:[
            `<div style="font-family: sans-serif; font-size:16px color: #222">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário do feedback: ${comment}</p>`,
            `<p>Foto do feedback: ${screenshot}</p>`,
            `</div> `
        ].join('\n') 
    });
    return res.status(201).json({data: feedback})
})

