import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee:any=[
    {machinecode: 'Plumber', description: 'Fix', hourlyrate: 65, maxhour:6}
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
