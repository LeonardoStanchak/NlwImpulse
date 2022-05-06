import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../loading";

interface ScreenshotButtonProps{
    screenshot: string | null;
    onSreenshotTook:(screenshot:string | null) => void;
}

export function ScreenshotButton({screenshot ,
    onSreenshotTook}
     : ScreenshotButtonProps){

    const[isTakingScreenshot, setTakingScreenshot] = useState(false); 

    async function handleTakeScreenshot(){
        setTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png');

        onSreenshotTook(base64Image);
        setTakingScreenshot(false);
    }

    if(screenshot){
        return(
            <button
            type="button"
            className="p-1 w-10 h-10 round-md border-transparent flex justify-end items-end text-zinc-400 houver:text-zinc-100 transition-colors"
            onClick={()=> onSreenshotTook(null)}
            style={{
                backgroundImage : `url(${screenshot})`, 
                backgroundPosition : 'right button',
                backgroundSize: 180
            }}
            >
                <Trash  weight="fill" className="w-4 h-4"/>
            </button>
        )
    }


    return(<button
        type="button"
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-nome focus:ring-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}
        </button>);
}