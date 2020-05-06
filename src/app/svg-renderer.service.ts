import { Injectable } from '@angular/core';


import {Module, render} from 'viz.js/full.render.js';
import Viz from 'viz.js';

@Injectable({
  providedIn: 'root'
})
export class SvgRendererService {

  constructor() {
  }

  render(dotScript: string) {
    return new Viz({ Module, render }).renderString(dotScript);
  }
}
