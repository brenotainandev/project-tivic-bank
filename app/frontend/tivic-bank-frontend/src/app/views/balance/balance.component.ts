import { Component, OnInit } from '@angular/core';
import { BalanceService } from './balance.service';
import { IAccount } from './account.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  account: IAccount = {
    id: 0,
    numberAccount: '',
    type: '',
    balance: 0,
  }

  listAccount:any [] = [];

  constructor(private balanceService: BalanceService) {

  }

  ngOnInit(): void {

  }

  balanceValue(): void {

    this.balanceService.balanceAccount(this.account).subscribe((account) => {
      this.listAccount = [account];
      this.account = account;

      console.log(this.listAccount);

      this.balanceService.showMessage("Conta encontrada :)")
    });
  }

}
