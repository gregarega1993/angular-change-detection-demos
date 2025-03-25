import { Component } from '@angular/core';
import { Example1Component } from "./example-1/example-1.component";

@Component({
  selector: 'app-root',
  imports: [Example1Component],
  template: `<app-example-1 />`,
  styles: ``,
})
export class AppComponent {}
