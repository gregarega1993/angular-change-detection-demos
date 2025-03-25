import { ChangeDetectionStrategy, Component } from '@angular/core';
import { E1c1Component } from "./ui/e1c1/e1c1.component";

@Component({
  selector: 'app-example-1',
  imports: [E1c1Component],
  template: `
    <app-e1c1 />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example1Component {

}
