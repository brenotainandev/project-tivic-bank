import { Component, OnInit } from '@angular/core';
import { DepositService } from './deposit.service';
import { IAccount } from './account.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  account: IAccount = {
    numberAccount: '',
    balance: 0
  }

  constructor(private depositService: DepositService) {

  }

  ngOnInit(): void {

  }

  depositAccount(): void {

    this.depositService.deposit(this.account).subscribe(() => {
      this.depositService.showMessage("Deposito Realizado :)")
    });
  }
}
