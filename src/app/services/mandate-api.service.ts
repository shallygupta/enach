import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MandateApiService {

   private mandateApiurl = "https://7303a577-b291-4540-bc80-4e70d82a02dd.mock.pstmn.io/mandate";
   constructor(private http: HttpClient) { }
   getData() {
      return this.http.get(this.mandateApiurl);
   }
}
