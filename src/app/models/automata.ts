import regParser from 'automata.js';
import {FiniteStateMachine} from './finite-state-machine';
import {TransitionStateDiagram} from './transition-state-diagram';

export class Automata {
  parser;
  nfa: FiniteStateMachine;
  dfa: FiniteStateMachine;
  dfaDotScript: string;
  nfaDotScript: string;
  transitionStateDiagram: TransitionStateDiagram;

  constructor(regex: string) {
    try {
      this.parser = new regParser.RegParser(regex);
      this.dfa = this.parser.parseToDFA();
      this.dfaDotScript = this.dfa.toDotScript();
      this.parser = new regParser.RegParser(regex);
      this.nfa = this.parser.parseToNFA();
      this.nfaDotScript = this.nfa.toDotScript();
      this.transitionStateDiagram = new TransitionStateDiagram(this.dfa);
    } catch (error) {
    }
  }
}
