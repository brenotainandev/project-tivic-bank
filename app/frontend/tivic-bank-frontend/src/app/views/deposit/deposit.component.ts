import { Component, OnInit } from '@angular/core';
import { DepositService } from './deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit{

  constructor(private depositService: DepositService) {

  }

  ngOnInit(): void {
   
  }

  depositAccount(): void {
    this.depositService.showMessage("Deposito Realizado :)");
  }
}
