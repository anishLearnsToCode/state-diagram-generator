import { Component, OnInit } from '@angular/core';
import {SvgRendererService} from '../svg-renderer.service';
import regParser from 'automata.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly svgRendererService: SvgRendererService) {
    const parser = new regParser.RegParser('a*b');
    const dfa = parser.parseToDFA();
    const dotScript = dfa.toDotScript();
    console.log(dotScript);
  }

  ngOnInit(): void {
  }

}
