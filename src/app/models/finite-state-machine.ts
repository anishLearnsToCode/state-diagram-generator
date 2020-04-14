export class FiniteStateMachine {
  initialState: string;
  acceptState: number[];
  type: 'DFA' | 'NFA';
  numOfStates: number;
  transitions;
}
