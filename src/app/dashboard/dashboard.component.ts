import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SvgRendererService} from '../svg-renderer.service';
import regParser from 'automata.js';
import {DynamicMessageComponent} from '../dynamic-message/dynamic-message.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  regex: string;
  title: string;
  componentReference: any;
  index = 0;

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
    console.log('called');
    if (this.regex !== '' || this.regex !== null) {
      try {
        const parser = new regParser.RegParser(this.regex);
        const dfa = parser.parseToDFA();
        const dotScript = dfa.toDotScript();
        this.svgRendererService.render(dotScript).then((svg: string) => {
          this.createComponent(this.sanitizer.bypassSecurityTrustHtml(svg.substring(264, svg.length)));
        }).catch(error => {
        });

      } catch (error) {
      }
    }
  }

  ngOnInit(): void {
  }

}
