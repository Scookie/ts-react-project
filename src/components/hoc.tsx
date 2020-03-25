import React from "react";
import { Diff } from "utility-types";
// import Hello from "./hello";
import { FCCounter } from "./fccCounter";
interface InjectedProps {
  count: number;
  onIncrement: () => void;
}

export const hocHello = <BaseProps extends InjectedProps>(
  BaseComponent: React.ComponentType<BaseProps>
) => {
  type HocProps = Diff<BaseProps, InjectedProps> & {
    // ...其他的props
    initialCount?: number;
  };

  type HocState = {
    readonly count: number;
  };

  return class Hoc extends React.Component<HocProps, HocState> {
    // static dispalyName = `hocHello(${BaseComponent.name})`;

    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {
      count: Number(this.props.initialCount) || 0,
    }

    handleIncrement = () => {
      this.setState({count:this.state.count+1});
    }

    render() {
      const { ...restProps } = this.props;
      const { count } = this.state;
      return (
        <BaseComponent
          count={count}
          onIncrement={this.handleIncrement}
          {...( restProps as BaseProps)}
        />
      );
    }  
  }
};

const FCCounterWithState = hocHello(FCCounter);
export default () => <FCCounterWithState label="x"/>;