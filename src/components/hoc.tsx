import React from "react";
import { Diff } from "utility-types";
import Hello from "./hello";
import { FCCounter } from "./fccCounter";
interface InjectedProps {
  name: string;
  enthusiasmLevel: number;
}

export const hocHello = <BaseProps extends InjectedProps>(
  BaseComponent: React.ComponentType<BaseProps>,
) => {
  type HocProps = Diff<BaseProps, InjectedProps> & {
    // ...其他的props
    name:string
  };

  type HocState = {
    readonly enthusiasmLevel: number;
  };

  return class Hoc extends React.Component<HocProps, HocState> {
    // static dispalyName = `hocHello(${BaseComponent.name})`;

    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {
      enthusiasmLevel: 3
    }

    handleIncrement = () => {
      this.setState({enthusiasmLevel:this.state.enthusiasmLevel+1});
    }

    handleDecrement = () => {
      if(this.state.enthusiasmLevel <= 3){
        let confirmResult =  window.confirm("could you maind keeping your enthusiasm ?");
        if(!confirmResult){
          this.setState({enthusiasmLevel:this.state.enthusiasmLevel-1});
        }
      }else{
        this.setState({enthusiasmLevel:this.state.enthusiasmLevel-1});
      }
    }

    render() {
      const { ...restProps } = this.props;
      const { enthusiasmLevel } = this.state;
      return (
        <BaseComponent
          enthusiasmLevel={enthusiasmLevel}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          {...( restProps as BaseProps)}
        />
      );
    }  
  }
};

const FCCounterWithState = hocHello(Hello);
export default (props:{name:string}) => <FCCounterWithState {...props}/>;