import { Component, OnInit } from '@angular/core';
import { MandateApiService } from '../services/mandate-api.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {

  public customer: Customer;

  constructor(private mandateService: MandateApiService) {
    this.customer = new Customer();
  }

  ngOnInit() {
      this.mandateService.getData().subscribe((data: any) => {
        this.customer.accountNo = data.MndtAuthReq.Mndt.Dbtr.AccNo;
        this.customer.corporateName = data.MndtAuthReq.Mndt.Dbtr.Nm;
        this.customer.startDt = data.MndtAuthReq.Mndt.Ocrncs.FrstColltnDt;
        this.customer.endDt = data.MndtAuthReq.Mndt.Ocrncs.FnlColltnDt;
        this.customer.frequency = data.MndtAuthReq.Mndt.Ocrncs.Frqcy;
        this.customer.purpose = data.MndtAuthReq.Mndt.Dbtr.AccNo;
        this.mandateService.mandateCustomer = this.customer;
    });
  }

}
