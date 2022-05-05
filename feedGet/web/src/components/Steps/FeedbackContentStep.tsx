import { CloseButton } from "../CloseButton"
import { FeedbackType, feedbackType } from "../WidgetForm"

interface feedbackContentStepProps{
    FeedbackType: FeedbackType
}

export function FeedbackContentStep({FeedbackType}: feedbackContentStepProps) {
     
    const feedbackTypeInfo = feedbackType[FeedbackType];

    return(
        
        <>
        <header>
        <span className="text-xl leading-6">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
            {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

    <div className="flex py-8 gap-2 w-full">
    
    </div>
    </>
    
    )
}