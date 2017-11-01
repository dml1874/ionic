import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinnerl: boolean = true;

  params = {
  	favoritesId: 2054400,
  	pageNo: 1,
  	pageSize: 20
  }

  constructor(
  		public appService: AppService,
  		public navCtrl: NavController
  	) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }

  //获取幻灯片
  getSlides() {
  	var params = {
  		favoritesId: 2056439,
  		pageNo: 1,
  		pageSize: 5
  	}
  	this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
  		console.debug(rs);
  		this.slides = rs.data;
  		this.spinnerl = false;
  	})
  }

  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
    })
  }

  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }

  //商品详情
  goDetails(item) {
    console.debug('go details...')
  }

  //分类栏目下的商品列标
  goProductList(item) {
    this.navCtrl.push('ProductListPage', { item: item });
  }

}
