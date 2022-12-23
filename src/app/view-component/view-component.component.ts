import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit{

  allUsers:any[]=[]
  constructor(private api:ApiService){}
  ngOnInit():void{
this.api.viewDetails().subscribe((data:any)=>{
  // console.log(data);
  this.allUsers=data.users;
})

  }

}
