import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.scss'],
})
export class FavoriteIconComponent implements OnInit {
  isActive: boolean = false;
  onFavouriteClick() {
    console.log(this.isActive);
    this.isActive = !this.isActive;
  }
  title = 'welcome to my new website ';
  //start pipes
  employee = {
    fullName: 'mariam shaker',
    rating: '5.6',
    salary: '20000',
    hiringdate: new Date(2015, 5, 2),
  };
  //end pipes

  onSubmit(value: any){
    console.log(value)
  }

  mainColor = true;
  constructor() {}

  ngOnInit(): void {}
}
