import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoriseMandComponent } from './authorise-mand.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponent } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AuthoriseMandComponent', () => {
  let component: AuthoriseMandComponent;
  let fixture: ComponentFixture<AuthoriseMandComponent>;
  let customerMock = { accountNo: '123',
     corporateName: 'fairose',
     startDt: '21/1/21',
     endDt: '21/1/21',
     frequency: 'monthly'
    }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule, AppRoutingModule],
      declarations: [ AuthoriseMandComponent, RoutingComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoriseMandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem('mandateCustomer', JSON.stringify(customerMock));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
