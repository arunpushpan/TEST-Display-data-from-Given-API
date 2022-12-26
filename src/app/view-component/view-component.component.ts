import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit{

  bgColor : string = 'grey';

randomColor:string='#FFB6C1'
  allUsers:any[]=[]
// searchKey:string=''
userId:string=''
user:any[]=[]
name:string=''
lname:string=''
email:string=''
photo:string=''
address:string=''
phone:string=''
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

 
 ngOnInit(): void{
  
  this.api.viewDetails().subscribe((data:any)=>{

    this.allUsers=data.users
    // console.log(this.allUsers);

    // console.log(this.allUsers[ Math.floor((Math.random()*30)+1)].id);
  //  console.log(this.allUsers[    Math.floor((Math.random()*30)+1)   ]);

this.user=this.allUsers
// console.log(this.user);

  this.photo=this.allUsers[Math.floor((Math.random()*29)+1)].image
  this.name=this.allUsers[Math.floor((Math.random()*29)+1)].firstName
  this.lname=this.allUsers[Math.floor((Math.random()*29)+1)].lastName
  this.email=this.allUsers[Math.floor((Math.random()*29)+1)].email
  this.phone=this.allUsers[Math.floor((Math.random()*29)+1)].phone
  this.address=this.allUsers[Math.floor((Math.random()*29)+1)].address.address
  this.changeColor()

// console.log(this.user);

})






  // search(event:any){
  //   this.searchKey=event.target.value
  // }
}

reload(){
  window.location.reload()
}


changeColor(){
    this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
}


}  