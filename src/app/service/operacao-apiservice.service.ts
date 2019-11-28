import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {
  apiUrl : string = "http://172.16.58.22:8001/api/funcoes/subtracao";
  constructor(private httpClient : HttpClient) { }



  handleError(error)
  {
    let errorMessage = `Código de error: ${error.status}\nMessagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }


  subtrair(num1 : string, num2: string) : Observable<string>
  {

    return this.httpClient.put<string>(`${this.apiUrl}?num1=${num1}&num2=${num2}`, null)
                           .pipe(retry(1),
                            catchError(this.handleError));
  } 


}


