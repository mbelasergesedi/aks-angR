import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletemedComponent } from './autocompletemed.component';

describe('AutocompletemedComponent', () => {
  let component: AutocompletemedComponent;
  let fixture: ComponentFixture<AutocompletemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
