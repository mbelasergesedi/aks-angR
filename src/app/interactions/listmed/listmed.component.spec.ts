import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmedComponent } from './listmed.component';

describe('ListmedComponent', () => {
  let component: ListmedComponent;
  let fixture: ComponentFixture<ListmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
