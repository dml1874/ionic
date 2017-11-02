import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ThemeableBrowser } from 'ionic-native';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})

export class ProductDetailsPage {

  selectedItem: any;
  imgs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedItem = this.navParams.get("item");
  	if (this.selectedItem.SmallImages) {
  		this.imgs = this.selectedItem.SmallImages;
  	}
  }

  //内置浏览器
  goBuy() {
  	let options = {
	  	statusbar: {
	  		color: '#f8285c'
	  	},
	  	toolbar: {
	  		height: 44,
	  		color: '#f8285c'
	  	},
	  	title: {
	  		color: '#ffffff',
	  		showPageTitle: true
	  	},
	  	backButton: {
	  		image: 'assets/imgs/back.png',
	  		imagePressed: 'assets/imgs/back_pressed.png',
	  		align: 'left',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	  		event: 'backPressed'
	  	},
	  	closeButton: {
	  		image: 'close',
	  		imagePressed: 'close_pressed',
	  		align: 'left',
	  		event: 'closePressed'
	  	},
	  	backButtonCanClose: true
	};
	new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank', options);
  }
 
}
