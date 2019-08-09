import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeInteractionsComponent } from './tree-interactions.component';

describe('TreeInteractionsComponent', () => {
  let component: TreeInteractionsComponent;
  let fixture: ComponentFixture<TreeInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
