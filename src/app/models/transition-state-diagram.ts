/* tslint:disable:forin */
import {FiniteStateMachine} from './finite-state-machine';
import {Transitions} from './transitions';

export class TransitionStateDiagram {
  initialState: string;
  finalStates: string[];
  transitionStates: Transitions[] = [];

  constructor(dfa: FiniteStateMachine) {
    this.initialState = dfa.initialState;
    this.finalStates = dfa.acceptStates;

    for (const state in dfa.transitions) {
      const array = [];
      for (const nextState in dfa.transitions[state]) {
        const symbol = dfa.transitions[state][nextState];
        array.push({symbol, nextState});
      }
      this.transitionStates.push(array);
    }
  }
}
