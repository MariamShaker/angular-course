import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  getAll(){
    return ['java','c','c#','c++']
  }
  constructor() { }
}
