import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateComponent } from './mandate.component';

describe('MandateComponent', () => {
  let component: MandateComponent;
  let fixture: ComponentFixture<MandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
