import { Component, Input } from '@angular/core';

@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})

export class IonProductsComponent {

  @Input() products: Array<any>;

  constructor() {
    console.log('Hello IonProductsComponent Component');
  }

  goDetails(item) {
  	console.debug('go details...');
  }

}
