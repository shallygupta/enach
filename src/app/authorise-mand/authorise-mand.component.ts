import { Component, OnInit } from '@angular/core';
import { MandateApiService } from '../services/mandate-api.service';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorise-mand',
  templateUrl: './authorise-mand.component.html',
  styleUrls: ['./authorise-mand.component.css']
})

export class AuthoriseMandComponent implements OnInit {
  public customer: Customer;
  constructor(private mandateApiService: MandateApiService,
    private router: Router) {
    this.customer = new Customer();
    this.customer = this.mandateApiService.mandateCustomer;

  }

  ngOnInit() {
    this.customer = this.mandateApiService.mandateCustomer;
  }

  approveMandate = function () {
    this.mandateApiService.approveMandate().subscribe((data: any) => {
      this.router.navigateByUrl('/confirm');
    });

  };
  rejectMandate = function () {
    this.mandateApiService.rejectMandate().subscribe((data: any) => {
      this.router.navigateByUrl('/reject');
    });
  };

}
