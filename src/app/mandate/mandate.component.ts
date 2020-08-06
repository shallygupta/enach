import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { MandateApiService } from '../services/mandate-api.service';
@Component({
  selector: 'app-mandate',
  templateUrl: './mandate.component.html',
  styleUrls: ['./mandate.component.css']
})

export class MandateComponent implements OnInit {
  public customer: Customer;
  constructor(private mandateApiService: MandateApiService) {
    this.customer = new Customer();
  }

  ngOnInit() {
    this.mandateApiService.getData().subscribe((data: any) => {
      this.customer.accountNo = data.MndtAuthReq.Mndt.Dbtr.AccNo;
      this.customer.corporateName = data.MndtAuthReq.Mndt.Dbtr.Nm;
      this.customer.startDt = data.MndtAuthReq.Mndt.Ocrncs.FrstColltnDt;
      this.customer.endDt = data.MndtAuthReq.Mndt.Ocrncs.FnlColltnDt;
      this.customer.frequency = data.MndtAuthReq.Mndt.Ocrncs.Frqcy;
      this.customer.purpose = data.MndtAuthReq.Mndt.Dbtr.AccNo;
      this.mandateApiService.mandateCustomer = this.customer;
      console.log(data);
      console.log(this.customer.accountNo);
    });
  }

}
