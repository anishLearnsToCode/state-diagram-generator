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
      // .then(result => {
      //   return result;
      // })
      // .catch(error => {
      //   // Create a new Viz instance (@see Caveats page for more info)
      //   viz = new Viz({ Module, render });
      //
      //   // Possibly display the error
      //   console.error(error);
      // });
  }
}
