import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E1c1Component } from './e1c1.component';

describe('E1c1Component', () => {
  let component: E1c1Component;
  let fixture: ComponentFixture<E1c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E1c1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
