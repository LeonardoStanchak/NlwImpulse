import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../CloseButton"
import { FeedbackType, feedbackType } from "../WidgetForm"

interface feedbackContentStepProps{
    FeedbackType: FeedbackType;
    onFeedbackRestartRequested: ()=>void;
}

export function FeedbackContentStep({FeedbackType,
     onFeedbackRestartRequested
    }: feedbackContentStepProps) {
     
    const feedbackTypeInfo = feedbackType[FeedbackType];

    return(
        
        <>
        <header>
            <button type="button"
             className="top-5  left-5 absolute  text-zinc-400 hover:text-zinc-100"
             onClick={onFeedbackRestartRequested}
             >
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>

            
        <span className="text-xl leading-6 flex items-center gap-2">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
            {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

    <form className="my-4 w-full">
        <textarea 
        className=""
        placeholder="Conte com detalhes oque está acontecendo..."
        />
    </form>
    </>
    
    )
}