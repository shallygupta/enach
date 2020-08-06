import { Component, OnInit } from '@angular/core';
import { MandateApiService } from '../services/mandate-api.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-confirm-mand',
  templateUrl: './confirm-mand.component.html',
  styleUrls: ['./confirm-mand.component.css']
})

export class ConfirmMandComponent implements OnInit {

  public customer: Customer;
  constructor(private mandateApiService: MandateApiService) {
    this.customer = new Customer();
    this.customer = this.mandateApiService.mandateCustomer;
  }

  ngOnInit() {
    this.customer = this.mandateApiService.mandateCustomer;
  }
}
