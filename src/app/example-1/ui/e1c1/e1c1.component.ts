import { ChangeDetectionStrategy, Component } from '@angular/core';
import { E1c2Component } from '../e1c2/e1c2.component';

@Component({
  selector: 'app-e1c1',
  imports: [E1c2Component],
  template: `
    <button (click)="changeUser()">Change user</button>
    <button (click)="changeUserReference()">Change user reference</button>
    <app-e1c2 [user]="user"></app-e1c2>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E1c1Component {
  user = {
    name: 'John',
  };
  changeUser() {
    this.user.name = 'Jane';
  }
  changeUserReference() {
    this.user = {
      ...this.user,
      name: 'Jane',
    };
  }
}
