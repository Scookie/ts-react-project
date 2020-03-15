import React,{ Component } from "react";
import "./hello.css"

export interface Props {
  name: string;
  enthusiasmLevel: number;
}

interface State {
  currentEnthusiasm: number;
}

// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   if(enthusiasmLevel <= 0){
//     throw new Error("you could be little more enthusiastic. :D");
//   }

//   return(
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMask(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }

class Hello extends Component<Props,State>{
  constructor(props:Props){
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => {
    this.setState({ currentEnthusiasm: this.state.currentEnthusiasm + 1});
  }

  onDecrement = () => {
    this.setState({ currentEnthusiasm: this.state.currentEnthusiasm -1 })
  }

  render(){
    const { name } = this.props;
    const { currentEnthusiasm } = this.state;
    if(currentEnthusiasm <= 0){
      throw new Error("you could be little more enthusiastic. :D");
    }
  
    return(
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMask(currentEnthusiasm)}
        </div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Hello;

function getExclamationMask(numChars: number){
  return Array(numChars + 1 ).join("!")
}