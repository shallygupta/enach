import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

@Injectable({
   providedIn: 'root'
})
export class MandateApiService {

   private mandateApiurl = "http://localhost:8080/bank/1";
   private mandateApproveUrl = "http://localhost:8080/bank/mandate/1/1";
   private mandateRejectUrl = "http://localhost:8080/bank/mandate/1/0";
   public mandateCustomer;

   constructor(private http: HttpClient, private location: LocationStrategy) {
      history.pushState(null, null, window.location.href);  
      this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);
      });  
    }

   getData() {
      return this.http.get(this.mandateApiurl);
   }

   public approveMandateReqBody() {
      return {
         "mandateStatus": "1"
      }
   }
   public approveMandate() {
      return this.http.post(this.mandateApproveUrl,"",{ responseType: 'text' });

   }
   public rejectMandateReqBody() {
      return {
         "mandateStatus": "0"
      }
   }
   public rejectMandate() {
      return this.http.post(this.mandateRejectUrl, "",{ responseType: 'text' });
   }
}

