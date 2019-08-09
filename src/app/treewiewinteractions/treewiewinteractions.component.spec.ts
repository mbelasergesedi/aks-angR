import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreewiewinteractionsComponent } from './treewiewinteractions.component';

describe('TreewiewinteractionsComponent', () => {
  let component: TreewiewinteractionsComponent;
  let fixture: ComponentFixture<TreewiewinteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreewiewinteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreewiewinteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
