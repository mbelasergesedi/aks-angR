import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSimpleComponent } from './search-simple.component';

describe('SearchSimpleComponent', () => {
  let component: SearchSimpleComponent;
  let fixture: ComponentFixture<SearchSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
