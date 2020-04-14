import { Component, OnInit } from '@angular/core';
import {SvgRendererService} from '../svg-renderer.service';
import regParser from 'automata.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  regex: string;

  constructor(private readonly svgRendererService: SvgRendererService) {
  }

  regexInputChanged() {
    console.log('called');
    if (this.regex !== '' || this.regex !== null) {
      try {
        const parser = new regParser.RegParser(this.regex);
        const dfa = parser.parseToDFA();
        const dotScript = dfa.toDotScript();
        console.log(dotScript);
        const svg = this.svgRendererService.render(dotScript);
        console.log(svg);
      } catch (error) {
        // do nothing
      }
    }
  }

  ngOnInit(): void {
  }

}
