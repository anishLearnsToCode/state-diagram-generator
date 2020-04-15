import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SvgRendererService} from '../svg-renderer.service';
import {DynamicMessageComponent} from '../dynamic-message/dynamic-message.component';
import {DomSanitizer} from '@angular/platform-browser';
import {Automata} from '../models/automata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private readonly STARTING_INDEX = 264;
  regex: string;
  componentReference: any;
  automata: Automata;
  selected: 'dfa' | 'nfa' = 'dfa';
  text = '';

  @ViewChild('messageContainer', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(private readonly svgRendererService: SvgRendererService,
              private readonly resolver: ComponentFactoryResolver,
              private readonly sanitizer: DomSanitizer) {
  }

  generateArray(count: number): number[] {
    return [...Array(count).keys()];
  }

  isAcceptState(state: string): boolean {
    return this.automata.dfa.acceptStates.indexOf(state) >= 0 ;
  }

  getNextStateFor(state: string, symbol: string) {
    if (this.automata.transitionStateDiagram.transitionStates[state] &&
      this.automata.transitionStateDiagram.transitionStates[state].has(symbol)) {
      return this.automata.transitionStateDiagram.transitionStates[state].get(symbol);
    }
    return 'epsilon';
  }

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(DynamicMessageComponent);
    this.componentReference = this.entry.createComponent(factory);
    this.componentReference.instance.message = message;
  }

  destroyComponent() {
    this.componentReference.destroy();
  }

  recognizedByLanguage(): boolean {
    if (this.automata && this.automata.dfa) {
      return this.automata.dfa.match(this.text);
    }
  }

  regexInputChanged() {
    if (this.regex !== '' || this.regex !== null) {
      try {
        this.automata = new Automata(this.regex);
        console.log(this.automata.transitionStateDiagram);
        this.createSvg();
      } catch (error) {
      }
    }
  }

  createSvg() {
    switch (this.selected) {
      case 'dfa': return this.createSvgFrom(this.automata.dfaDotScript);
      case 'nfa': return this.createSvgFrom(this.automata.nfaDotScript);
    }
  }

  createSvgFrom(dotScript: string): void {
    this.svgRendererService.render(dotScript).then((svg: string) => {
      this.createComponent(this.sanitizer.bypassSecurityTrustHtml(svg.substring(this.STARTING_INDEX, svg.length)));
    }).catch(error => {
    });
  }

  setNfa() {
    this.selected = 'nfa';
    this.createSvgFrom(this.automata.nfaDotScript);
  }

  setDfa() {
    this.selected = 'dfa';
    this.createSvgFrom(this.automata.dfaDotScript);
  }

  ngOnInit(): void {
  }

}
