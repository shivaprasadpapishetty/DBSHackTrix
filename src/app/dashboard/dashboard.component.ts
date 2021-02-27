import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardHeading: String;
  showData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getData(e){
    this.cardHeading = e;
    this.showData = true
  }

  hideData(){
    this.showData = false
  }

}
