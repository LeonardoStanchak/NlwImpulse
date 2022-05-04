import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../img/button-card/Figmoji/bug.svg';
import ideaImageUrl from '../../img/button-card/Figmoji/idea.svg';
import thougImageUrl from '../../img/button-card/Figmoji/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "../Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";

export const feedbackType = {
    BUG:{
        title: 'Problema',
        image:{
          source: bugImageUrl,
          alt:'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
          source: ideaImageUrl,
          alt:'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
          source: thougImageUrl,
          alt:'Imagem de um balao de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackType;


export function WidgetForm() {
  const [feedbackTypes, setFeedbackTypes] = useState<FeedbackType | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton/>
      </header>
      
      {!feedbackTypes ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer className="text-xl text-neutral-400">
          Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeseat.com.br"></a>
        </footer>
    </div>
  );
}
