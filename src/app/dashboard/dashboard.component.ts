import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SvgRendererService} from '../svg-renderer.service';
import regParser from 'automata.js';
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
  title: string;
  componentReference: any;
  index = 0;
  automata: Automata;
  selected: 'dfa' | 'nfa' = 'dfa';

  @ViewChild('messageContainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private readonly svgRendererService: SvgRendererService,
              private readonly resolver: ComponentFactoryResolver,
              private readonly sanitizer: DomSanitizer) {
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

  regexInputChanged() {
    if (this.regex !== '' || this.regex !== null) {
      try {
        this.automata = new Automata(this.regex);
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
