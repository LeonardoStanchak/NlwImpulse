import { useState } from 'react'

interface ButtonProps {
  text ?: string;
}

function Button(props : ButtonProps) {
 return <button className="bg-red-800 p-3">{props.text}</button>
}

function App(){
  return(
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />

    </div>
  )
}

export default App
