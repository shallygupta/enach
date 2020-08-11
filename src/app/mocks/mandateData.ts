import { of }  from 'rxjs';

export class MockMandateSerive {
   
    public getData() {
      return of(mockData);
    }
  }

export const mockData = {
    "MndtAuthReq": {
       "GrpHdr": {
          "NPCI_RefMsgId": "000f0f29dc27f00000101b09c5227457f17",
          "CreDtTm": "2017-02-09T15:12:39",
          "ReqInitPty": {
             "Info": {
                "Id": "HDFC00001123456789",
                "CatCode": "COO1",
                "UtilCode": "6543",
                "CatDesc": "Insurance Company",
                "Name": "LIC",
                "Spn_Bnk_Nm": "State Bank Of India"
             }
          }
       },
       "Mndt": {
          "MndtReqId": "000f0f29dc27f00000101b09c52b8e50037",
          "MndtId": "UMRN",
          "Mndt_Type": "DEBIT",
          "Schm_Nm": "ABC123",
          "Ocrncs": {
             "SeqTp": "RCUR",
             "Frqcy": "MNTH",
             "FrstColltnDt": "2017-04-05",
             "FnlColltnDt": "2018-03-05"
          },
          "ColltnAmt": {
             "@Ccy": "INR",
             "#text": "1200"
          },
          "MaxAmt": {
             "@Ccy": "INR",
             "#text": "1200"
          },
          "Dbtr": {
             "Nm": "FAIROSE",
             "AccNo": "ACNo123456",
             "Acct_Type": "SAVINGS",
             "Cons_Ref_No": "XXX123",
             "Phone": "+91-XXX-XXXXXXXX",
             "Mobile": "+91-XXXXXXXXXX",
             "Email": "XX@XX.COM",
             "Pan": "XXXXX9999X"
          },
          "CrAccDtl": {
             "Nm": "ABC India Limited",
             "AccNo": "ACNo78912340",
             "MmbId": "HDFC0000001"
          }
       }
    }
 }