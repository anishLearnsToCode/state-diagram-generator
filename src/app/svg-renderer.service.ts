import { Injectable } from '@angular/core';


import {Module, render} from 'viz.js/full.render.js';
import Viz from 'viz.js';

let viz = new Viz({ Module, render });

@Injectable({
  providedIn: 'root'
})
export class SvgRendererService {

  constructor() {
  }

  render(dotScript: string) {
    viz.renderString(dotScript)
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(error => {
        // Create a new Viz instance (@see Caveats page for more info)
        viz = new Viz({ Module, render });

        // Possibly display the error
        console.error(error);
      });
  }
}
