import { CloseButton } from "./Closebutton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        
        <CloseButton/>
      </header>

      <p>Ola meu mundost</p>

      <footer className="text-xl text-neutral-400">
          Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeseat.com.br"></a>
        </footer>
    </div>
  );
}
