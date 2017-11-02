import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})

export class IonProductsComponent {

  @Input() products: Array<any>;

  constructor(public navCtrl: NavController) {
    console.log('Hello IonProductsComponent Component');
  }

  goDetails(item) {
  	this.navCtrl.push('ProductDetailsPage', { item: item });
  }

}
