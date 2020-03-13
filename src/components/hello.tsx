import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if(enthusiasmLevel <= 0){
    throw new Error("you could be little more enthusiastic. :D");
  }

  return(
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMask(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMask(numChars: number){
  return Array(numChars + 1 ).join("!")
}