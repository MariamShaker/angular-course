import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
@Input() itemtitleInChild="child"
@Output()  itemDetailsEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addItemDetails(value: string){
    this.itemDetailsEvent.emit(value);
  }

}
