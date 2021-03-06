import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../image/Bug.svg';
import ideaImageUrl from '../../image/Idea.svg';
import thougImageUrl from '../../image/Thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "../Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeedbackSuccessStep";

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
  const[feedbackSent, setFeedbackSent] = useState(false);
    
  function handleRestartFeedback(){
      setFeedbackTypes(null);
      setFeedbackSent(false);
    }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ):(
        <>
        {!feedbackTypes ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStep 
        FeedbackType={feedbackTypes}  
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent={()=>setFeedbackSent(true)}
        />
      )}
        </>
      )
    }
      <footer className="text-xl text-neutral-400">
          Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeseat.com.br"></a>
        </footer>
    </div>
  );
}
