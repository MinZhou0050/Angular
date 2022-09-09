import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardt',
  templateUrl: './dashboardt.component.html',
  styleUrls: ['./dashboardt.component.css']
})
export class DashboardtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee:any=[
    {sitecode: 'Plumber', contractorname: 'Fix', totalhour: 65, totleamount:6, type: 'open'}
     
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
