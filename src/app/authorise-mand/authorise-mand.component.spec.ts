import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoriseMandComponent } from './authorise-mand.component';

describe('AuthoriseMandComponent', () => {
  let component: AuthoriseMandComponent;
  let fixture: ComponentFixture<AuthoriseMandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoriseMandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoriseMandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
