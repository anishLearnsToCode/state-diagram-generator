import regParser from 'automata.js';

export class Automata {
  parser;
  nfa;
  dfa;
  dfaDotScript: string;
  nfaDotScript: string;

  constructor(regex: string) {
    try {
      this.parser = new regParser.RegParser(regex);
      this.dfa = this.parser.parseToDFA();
      this.dfaDotScript = this.dfa.toDotScript();
      this.parser = new regParser.RegParser(regex);
      this.nfa = this.parser.parseToNFA();
      this.nfaDotScript = this.nfa.toDotScript();
    } catch (error) {
    }
  }
}
