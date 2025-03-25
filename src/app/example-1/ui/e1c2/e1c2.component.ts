import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-e1c2',
  imports: [],
  template: ` {{ user()?.name }} `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E1c2Component {
  user = input<{ name: string }>();
}
