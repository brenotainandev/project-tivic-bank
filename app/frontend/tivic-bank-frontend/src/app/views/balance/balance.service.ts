import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IAccount } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  balanceAccount(account: IAccount): Observable<IAccount> {
    const url =  "http://localhost:3000/account/number";

    const value = {
      numberAccount: account.numberAccount
    }

    return this.http.post<IAccount[]>(url, value).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e.message))
    );
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Conta Invalida!", true);
    return EMPTY;
  }
}
