import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  
  hasmore = true;
  products: any;
  selectItem: any;

  spinnerl: boolean = true;

  params = {
  	pageNo: 1,
  	favoritesId: 0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) { 
  	this.selectItem = this.navParams.get('item');
  	this.params.favoritesId = this.selectItem.FavoritesId;
  }

  ionViewDidLoad() {
  	this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems() {
  	this.appService.httpGet(AppGlobal.API.getProducts, this.params, d => {
  		this.products = d.data;
  		this.params.pageNo += 1;
  		this.spinnerl = false;
  	});
  }

  doInfinite(infiniteScroll) {
  	if (this.hasmore == false) {
  		infiniteScroll.complete();
  		return;
  	}
  	this.appService.httpGet(AppGlobal.API.getProducts, this.params, d => {
  		if (d.data.length > 0) {
  			this.products = this.products.concat(d.data);
  			this.params.pageNo += 1;
  		} else {
  			this.hasmore = false;
  			console.log("没有数据了！");
  		}
  		infiniteScroll.complete();
  	});
  } 

}
