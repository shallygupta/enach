import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { MandateApiService } from '../services/mandate-api.service';
@Component({
  selector: 'app-mandate',
  templateUrl: './mandate.component.html',
  styleUrls: ['./mandate.component.css']
})
export class MandateComponent implements OnInit {
  public customer : Customer;
  constructor(private mandateApiService: MandateApiService) {
    this.customer = new Customer();
   }

  ngOnInit() {
    this.mandateApiService.getData().subscribe((data: any) => {
      this.customer.accountNo = data.MndtAuthReq.Mndt.Dbtr.AccNo;
      console.log(data);
      console.log(this.customer.accountNo );
   });
  }

}
