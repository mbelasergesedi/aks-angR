import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInteractionsComponent } from './create-interactions.component';

describe('CreateInteractionsComponent', () => {
  let component: CreateInteractionsComponent;
  let fixture: ComponentFixture<CreateInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
