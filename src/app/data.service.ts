import { Injectable } from '@angular/core';

@Injectable()
export class DataService {



  cars = ['Ford', 'Chevy', 'Buick'];

  constructor() { }

  myData() {
    return 'This is my data';
  }

}
