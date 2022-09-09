import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee:any=[
    {jobcode: 'Plumber', description: 'Fix', hourlyrate: 65, maxhour:6}
  ]

  getItemFromTrackBy(index:any){

  }

  change:string = 'change-text-highlight-off';

  highlight(b:boolean){
    if (b==true) this.change='change-text-highlight-on';
    if (b==false) this.change='change-text-highlight-off';
  }

  public selectedName:any;
  public highlightRow(item:{name:any}){
    this.selectedName = item.name;
  }


}
