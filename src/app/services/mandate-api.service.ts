import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS_CONSTANT } from '../constants/nach';

@Injectable({
   providedIn: 'root'
})
export class MandateApiService {

   public mandateCustomer;

   constructor(private http: HttpClient) {
    }

   getData() {
      return this.http.get(ENDPOINTS_CONSTANT.mandateData);
   }

   public approveMandateReqBody() {
      return {
         mandateStatus: '1'
      };
   }
   public approveMandate() {
      return this.http.post(ENDPOINTS_CONSTANT.mandateApproveUrl, '', { responseType: 'text' });

   }
   public rejectMandateReqBody() {
      return {
         mandateStatus: '0'
      };
   }
   public rejectMandate() {
      return this.http.post(ENDPOINTS_CONSTANT.mandateRejectUrl, '', { responseType: 'text' });
   }
}

