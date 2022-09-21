import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FirstServiceService } from '../services/first-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  title= "Angular Test";
  imageUrl="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80";
  isActive=false;
  
  buttonColor(){
    alert("Hi mariam");
    console.log("Active");
    
  }
  //example button
  varColor='';
  setColor(color: string){
    console.log(color);
    this.varColor=color;
  }
  // two way binding
  firstname='';
  setsColor(firstname: string){
    console.log(firstname)
  }

//test two way binding
  usernumber= 0;
    onRange(usernumber: number){
      console.log(usernumber)
    }


  nameval='';
  inputKeyUp(firstName: string){
     this.nameval = firstName ;
    console.log(firstName);
  }

    courses;
  constructor(firstService: FirstServiceService){
    this.courses = firstService.getAll();
  }
}
