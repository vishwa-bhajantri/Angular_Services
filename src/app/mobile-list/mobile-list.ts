import { Component, inject, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile-service';

@Component({
  imports: [],
  selector: 'app-mobile-list',
  styleUrl: './mobile-list.css',
  templateUrl: './mobile-list.html',
})
export class MobileList implements OnInit{
  

  
//mobiles:any;

mobileService = inject(MobileService);
mobiles:any;
welcomeMessage !: string;

ngOnInit(): void {
  //var mobileService = new MobileService();
  this.mobiles = this.mobileService.getMobiles();
  this.welcomeMessage = this.mobileService.getWelcomeMessage();
}


}
