import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class MandateApiService {

   private mandateApiurl = "https://7303a577-b291-4540-bc80-4e70d82a02dd.mock.pstmn.io/mandate";
   private mandateActionUrl = "https://1c104c95-84a0-42bf-a580-2194fa626347.mock.pstmn.io/mandateAction";
   public mandateCustomer;

   constructor(private http: HttpClient) { }

   getData() {
      return this.http.get(this.mandateApiurl);
   }

   public approveMandateReqBody() {
      return {
         "mandateStatus": "1"
      }
   }
   public approveMandate() {
      return this.http.post(this.mandateActionUrl, this.approveMandateReqBody());

   }
   public rejectMandateReqBody() {
      return {
         "mandateStatus": "0"
      }
   }
   public rejectMandate() {
      return this.http.post(this.mandateActionUrl, this.rejectMandateReqBody());
   }
}

