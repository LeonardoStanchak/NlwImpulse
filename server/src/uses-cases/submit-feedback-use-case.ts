import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    constructor(
      private  feedbacksRepository: FeedbacksRepository,
      private mailAdapter: MailAdapter
    ){}
    async excute(request: SubmitFeedbackUseCaseRequest){
         const{type, comment, screenshot} = request;

         await this.feedbacksRepository.create({
             type,
             comment,
             screenshot,
         })

         await this.mailAdapter.sendMail({
             subject: 'Novo feedback',
             body: [
                `<div style="font-family: sans-serif; font-size:16px color: #222">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário do feedback: ${comment}</p>`,
                `<p>Foto do feedback: ${screenshot}</p>`,
                `</div> `
            ].join('\n')
        } )
    }
}