import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComplexeComponent } from './search-complexe.component';

describe('SearchComplexeComponent', () => {
  let component: SearchComplexeComponent;
  let fixture: ComponentFixture<SearchComplexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComplexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
