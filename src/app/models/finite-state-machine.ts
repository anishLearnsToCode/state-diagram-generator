export interface FiniteStateMachine {
  initialState: string;
  acceptStates: string[];
  type: 'DFA' | 'NFA';
  numOfStates: number;
  transitions;

  toDotScript(): string;
  match(text: string): boolean;
}
