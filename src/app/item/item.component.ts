import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemTitleInParent= "parent";
  constructor() { }

  ngOnInit(): void {
  }
  details=['red','blue','GREEN'];
  addDetails(newValue: string){
    this .details.push(newValue)
  }
}
