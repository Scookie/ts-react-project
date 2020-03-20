import Hello from "../components/hello";
import * as action from "../actions";
import { StoreState } from "../types";
import { connect,DispatchProp } from "react-redux";

export function mapStateToProps({ enthusiasmLevel,languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}
export function mapDispatchToProps(dispatch: DispatchProp<action.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(action.incrementEnthusiasm()),
    onDecrement: () => dispatch(action.decrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);