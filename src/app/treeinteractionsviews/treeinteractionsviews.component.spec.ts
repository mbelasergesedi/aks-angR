import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeinteractionsviewsComponent } from './treeinteractionsviews.component';

describe('TreeinteractionsviewsComponent', () => {
  let component: TreeinteractionsviewsComponent;
  let fixture: ComponentFixture<TreeinteractionsviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeinteractionsviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeinteractionsviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
