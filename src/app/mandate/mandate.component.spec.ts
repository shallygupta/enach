import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateComponent } from './mandate.component';
import { MandateApiService } from '../services/mandate-api.service';
import { MockMandateSerive, mockData } from '../mocks/mandateData';
import { of }  from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponent } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('MandateComponent', () => {
  let component: MandateComponent;
  let mandateApiService: MandateApiService;
  let fixture: ComponentFixture<MandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule, AppRoutingModule],
      declarations: [ MandateComponent, RoutingComponent ],
      providers: [
        {provide: MandateApiService, useClass: MockMandateSerive},
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateComponent);
    component = fixture.componentInstance;
    mandateApiService = TestBed.get(MandateApiService);
    spyOn(mandateApiService, 'getData').and.returnValue(of(mockData));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.ngOnInit();
    console.log('customer: '+component.customer.accountNo);
    expect(component.customer.accountNo).toBe('ACNo123456');
  });
  
  


  
});
