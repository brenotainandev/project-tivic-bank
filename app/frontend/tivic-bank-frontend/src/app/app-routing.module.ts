import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { BalanceComponent } from "./views/balance/balance.component";
import { DepositComponent } from "./views/deposit/deposit.component";
import { WithdrawalComponent } from "./views/withdrawal/withdrawal.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "account/balance",
    component: BalanceComponent
  },
  {
    path: "account/deposit",
    component: DepositComponent
  },
  {
    path: "account/withdrawal",
    component: WithdrawalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
