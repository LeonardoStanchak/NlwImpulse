import { CloseButton } from "./CloseButton";
import bugImageUrl from '../img/button-card/Figmoji/bug.svg';
import ideaImageUrl from '../img/button-card/Figmoji/idea.svg';
import thougImageUrl from '../img/button-card/Figmoji/thought.svg';
import { useState } from "react";

const feedbackType = {
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

type FeedbackType = keyof typeof feedbackType;


export function WidgetForm() {
  const [feedbackTypes, setFeedbackTypes] = useState<FeedbackType | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton/>
      </header>
      
      {!feedbackTypes ? (
        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackType).map(([key, value]) =>{
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => setFeedbackTypes(key as FeedbackType)}
              type="button">
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
      ) : (
        <p>Hello World!</p>
      )}

      <footer className="text-xl text-neutral-400">
          Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeseat.com.br"></a>
        </footer>
    </div>
  );
}
