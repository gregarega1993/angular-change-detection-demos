import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E1c2Component } from './e1c2.component';

describe('E1c2Component', () => {
  let component: E1c2Component;
  let fixture: ComponentFixture<E1c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E1c2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E1c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
