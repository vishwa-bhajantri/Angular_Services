import { Injectable } from "@angular/core";

  
  @Injectable({
    providedIn: 'root'
  })

  export class MobileService {

    getMobiles() {
      return [
        {
          id : 1,
          brand : 'Samsung',
          model : 'Galaxy S26',
        price : 85000
      },
      {
        id : 2,
        brand : 'Apple',
        model : 'iPhone 18',
        price : 95000
      },
      {
        id : 3,
        brand : 'OnePlus',
        model : 'OnePlus 16',
        price : 60000
      }
    ];
}

  getWelcomeMessage() {
    return 'Welcome to the Mobile Store';
  }
}