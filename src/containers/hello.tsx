import Hello from "../components/hello";
import * as action from "../actions";
import { StoreState } from "../types";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasmLevel,languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}
export function mapDispatchToProps(dispatch: Dispatch<action.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(action.incrementEnthusiasm()),
    onDecrement: () => dispatch(action.decrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);