import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.scss']
})
export class PortfolioCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  save(): void {
    console.log('saved')
  }
}
