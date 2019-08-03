import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksantimedComponent } from './aksantimed.component';

describe('AksantimedComponent', () => {
  let component: AksantimedComponent;
  let fixture: ComponentFixture<AksantimedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksantimedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksantimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
