import { Component, OnInit } from '@angular/core';
import { WithdrawalService } from './withdrawal.service';
import { IAccount } from './account.model';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  account: IAccount = {
    numberAccount: '',
    balance: 0
  }

  constructor(private withdrawalService: WithdrawalService) {

  }

  ngOnInit(): void {

  }

  withdrawalAccount(): void {

    this.withdrawalService.withdrawal(this.account).subscribe(() => {
      this.withdrawalService.showMessage("Saque Realizado :)")

      this.account.numberAccount = '';
      this.account.balance = 0;
    });
  }
}
