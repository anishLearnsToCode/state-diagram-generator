/* tslint:disable:forin */
import {FiniteStateMachine} from './finite-state-machine';
import {Transitions} from './transitions';

export class TransitionStateDiagram {
  initialState: string;
  finalStates: string[];
  transitionStates: Transitions[] = [];
  symbols = new Set<string>();

  constructor(dfa: FiniteStateMachine) {
    this.initialState = dfa.initialState;
    this.finalStates = dfa.acceptStates;

    for (const state in dfa.transitions) {
      const transitions = new Map<string, string>();
      for (const nextState in dfa.transitions[state]) {
        const symbol = dfa.transitions[state][nextState];
        this.symbols.add(symbol);
        transitions.set(symbol, nextState);
      }
      this.transitionStates.push(transitions);
    }
  }
}
