import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectMandateComponent } from './reject-mandate.component';

describe('RejectMandateComponent', () => {
  let component: RejectMandateComponent;
  let fixture: ComponentFixture<RejectMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
