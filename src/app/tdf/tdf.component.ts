import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { userTest } from '../user-test';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss'],
})
export class TdfComponent implements OnInit {
  topics=['english', 'arabic','math']
  userModel = new userTest('','mariam@gmail.com','','arabic','Default-radio',true);
  constructor(private enrollmentService:EnrollService) {}
  onSubmit(){
    this.enrollmentService.enroll(this.userModel).subscribe(Response=>{
      console.log("success");
    },
    error=>
    {console.log(error);  

    });
  }
  ngOnInit(): void {}
}
