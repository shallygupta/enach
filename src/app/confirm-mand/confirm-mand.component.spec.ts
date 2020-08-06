import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMandComponent } from './confirm-mand.component';

describe('ConfirmMandComponent', () => {
  let component: ConfirmMandComponent;
  let fixture: ComponentFixture<ConfirmMandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
